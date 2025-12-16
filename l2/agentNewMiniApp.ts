/// <mls shortName="agentNewMiniApp" project="102022" enhancement="_blank" />

import { IAgent, svg_agent } from '/_100554_/l2/aiAgentBase';
import { getPromptByHtml } from '/_100554_/l2/aiPrompts';
import '/_100554_/l2/widgetQuestionsForClarification';
import {
    getNextInProgressStepByAgentName,
    notifyTaskChange,
    updateStepStatus,
    getNextPendentStep,
    getNextStepIdAvaliable,
    updateTaskTitle,
    getNextPendingStepByAgentName
} from "/_100554_/l2/aiAgentHelper";

import {
    startNewAiTask,
    startNewInteractionInAiTask,
    executeNextStep,
    addNewStep,
    startClarification,
    ClarificationValue
} from "/_100554_/l2/aiAgentOrchestration";

const agentName = "agentNewMiniApp";
const project = 102022; 

export function createAgent(): IAgent {
    return {
        agentName,
        avatar_url: svg_agent,
        agentDescription: "Agent NewMiniApp, for decide instructions",
        visibility: "public",
        async beforePrompt(context: mls.msg.ExecutionContext): Promise<void> {
            return _beforePrompt(context);
        },
        async afterPrompt(context: mls.msg.ExecutionContext): Promise<void> {
            return _afterPrompt(context);
        },
        async beforeClarification(context: mls.msg.ExecutionContext, stepId: number, readOnly: boolean): Promise<HTMLDivElement | null> {
            return _beforeClarification(context, stepId, readOnly);
        },
        async afterClarification(context: mls.msg.ExecutionContext, stepId: number, clarification: ClarificationValue): Promise<void> {
            return _afterClarification(context, stepId, clarification);
        }
    };
}

const _beforePrompt = async (context: mls.msg.ExecutionContext): Promise<void> => {
    const taskTitle = "Planning...";
    if (!context || !context.message) throw new Error("Invalid context");
    if (!context.task) {
        let prompt = removeAgentPrefix(context.message.content.trim(), agentName);
        const inputs: any = await getPrompts(prompt);
        await startNewAiTask(agentName, taskTitle, context.message.content, context.message.threadId, context.message.senderId, inputs, context, _afterPrompt);
        return;
    }
    const step: mls.msg.AIAgentStep | null = getNextPendingStepByAgentName(context.task, agentName);
    if (!step) throw new Error(`[${agentName}](beforePrompt) No pending step found for this agent.`);

    if (!step.prompt) throw new Error(`[${agentName}](beforePrompt) No prompt found in step for this agent.`);
    const inputs = await getPrompts(step.prompt);
    await startNewInteractionInAiTask(agentName, taskTitle, inputs, context, _afterPrompt, step.stepId);

}

const _afterPrompt = async (context: mls.msg.ExecutionContext): Promise<void> => {
    if (!context || !context.message || !context.task) throw new Error("Invalid context");
    const step: mls.msg.AIAgentStep | null = getNextInProgressStepByAgentName(context.task, agentName);
    if (!step) throw new Error(`[${agentName}] afterPrompt: No in progress interaction found.`);
    const payload = step.interaction?.payload || [];
    if (!payload || payload.length > 1) throw new Error('afterPrompt: Invalid payload');

    context = await updateStepStatus(context, step.stepId, "completed");
    const stepType = payload[0].type;
    switch (stepType) {
        case 'flexible':
            await nextStep(context);
            if (context.task) context.task = await updateTaskTitle(context.task, "Waiting next agent");
            notifyTaskChange(context);
            break;
        case 'clarification':
            if (context.task) context.task = await updateTaskTitle(context.task, "Waiting for user");
            notifyTaskChange(context);
            await executeNextStep(context);
            break;
        default:
            if (context.task) context.task = await updateTaskTitle(context.task, "Done");
            notifyTaskChange(context);
            await executeNextStep(context);
    }
}

const _beforeClarification = async (context: mls.msg.ExecutionContext, stepId: number, readOnly: boolean): Promise<HTMLDivElement | null> => {
    return startClarification(context, stepId, readOnly);
}
function getInitialUserPrompt(context: mls.msg.ExecutionContext): string {
    const nextSteps = context.task?.iaCompressed?.nextSteps;
    if (!nextSteps || nextSteps.length === 0) return '';
    const inputs = nextSteps[0].interaction?.input;
    if (!inputs || inputs.length === 0) return '';

    const humanInput = inputs.filter((prompt) => prompt.type === 'human');

    if (!humanInput) return '';
    return humanInput[0].content; 

}
const _afterClarification = async (context: mls.msg.ExecutionContext, stepId: number, clarification: ClarificationValue): Promise<void> => {
    // only execute after button 'continue'
    if (!context || !context.message || !context.task) throw new Error(`[${agentName}](afterClarification) Invalid context`);
    if (!clarification) throw new Error(`[${agentName}](afterClarification) Invalid json after clarification`);    
    const humanPrompt = getInitialUserPrompt(context);

    const nextPrompt = { prompt: removeAgentPrefix(humanPrompt, agentName), clarification: clarification.questions };
    
    const newStep: mls.msg.AIPayload = {
        type: 'agent',
        agentName: `${agentName}`,
        prompt: JSON.stringify(nextPrompt),
        status: 'pending',
        stepId: stepId + 1, // getNextStepIdAvaliable(context.task),
        interaction: null,
        nextSteps: null,
        rags: null
    }
    // complete this step (payload) and push another step
    await addNewStep(context, stepId, [newStep], "Waiting ...");
}

async function nextStep(context: mls.msg.ExecutionContext) {
    if (!context.task) throw new Error(`[${agentName}]: nextStep not found task`);
    const step = getNextPendentStep(context.task) as mls.msg.AIPayload | null;

    if (!step || step.type !== 'flexible' || !step.result) throw new Error(`[${agentName}]: ` + 'Invalid step in update defs, type: "' + step?.type + '"');

    if (!step.result || typeof step.result === 'string') return;

    const info: PayloadUpdate = {
        defs: step.result,
        isUpdate: false
    }

    const newStep: mls.msg.AIPayload = {
        agentName: 'agentUpdateMiniApp',
        prompt: JSON.stringify(info),
        status: 'pending',
        stepId: getNextStepIdAvaliable(context.task),
        interaction: null,
        nextSteps: null,
        rags: null,
        type: 'agent'
    }
    await addNewStep(context, step.stepId, [newStep], 'Waiting ...');

}

async function getPrompts(userPrompt: string): Promise<mls.msg.IAMessageInputType[]> {

    const dataForReplace = {
        userPrompt,
        projectId: mls.actualProject
    }

    const prompts = await getPromptByHtml({ project, shortName: agentName, folder: '', data: dataForReplace })
    return prompts;
}

function removeAgentPrefix(rawPrompt: string, _agentName: string): string {
    /**
     * receive '@@_102022_/l2/agentNewMiniApp ola mundo' 
     * or @@agentNewMiniApp ola mundo 
     * or @@NewMiniApp ola mundo
     * 
     * return 'ola mundo'
     */
    if (!rawPrompt || rawPrompt === '') return '';
    if (rawPrompt.indexOf('@@') === - 1) return rawPrompt;
    let finalPrompt = rawPrompt; // init with dyrt prompt
    let textSearch = '/' + _agentName

    let nameWithoutAgent = _agentName.replace('agent', '');
    if (rawPrompt.startsWith('@@' + nameWithoutAgent)) textSearch = '@@' + nameWithoutAgent;
    else if (rawPrompt.startsWith(`@@${_agentName}`)) textSearch = `@@${_agentName}`;

    const indexText = rawPrompt.indexOf(textSearch);
    if (indexText > -1) {
        finalPrompt = rawPrompt.substring(indexText + textSearch.length).trim();
    }    
    return finalPrompt;
}

export interface PayloadUpdate {
    defs: mls.l4.BaseDefs;
    isUpdate: boolean;
}