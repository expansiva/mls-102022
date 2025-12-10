/// <mls shortName="agentUpdateMiniApp" project="102022" enhancement="_blank" />

import { IAgent, svg_agent } from '/_100554_/l2/aiAgentBase';
import { getPromptByHtml } from '/_100554_/l2/aiPrompts';
import { convertFileNameToTag } from '/_100554_/l2/utilsLit.js';
import '/_100554_/l2/widgetQuestionsForClarification';
import {
    getNextInProgressStepByAgentName,
    notifyTaskChange,
    updateStepStatus,
    updateTaskTitle,
    getNextPendingStepByAgentName
} from "/_100554_/l2/aiAgentHelper";

import {
    startNewAiTask,
    startNewInteractionInAiTask,
    executeNextStep,
} from "/_100554_/l2/aiAgentOrchestration";
import { createNewFile } from '/_100554_/l2/pluginNewFileBase';
import { ServiceSource100554 } from '/_100554_/l2/serviceSource';
import { getState } from '/_100554_/l2/collabState';
import { addModule } from '/_100554_/l2/projectAST';
import { collabImport } from '/_100554_/l2/collabImport';

const agentName = "agentUpdateMiniApp";
const project = 102022;

const enhancementTs = '_100554_enhancementLit'
const enhancementStyle = '_100554_enhancementStyle';

export function createAgent(): IAgent {
    return {
        agentName,
        avatar_url: svg_agent,
        agentDescription: "Agent NewMiniApp, for decide instructions",
        visibility: "private",
        async beforePrompt(context: mls.msg.ExecutionContext): Promise<void> {
            return _beforePrompt(context);
        },
        async afterPrompt(context: mls.msg.ExecutionContext): Promise<void> {
            return _afterPrompt(context);
        },
        async installBot(context: mls.msg.ExecutionContext): Promise<boolean> {
            throw new Error('Not implement');
        },
        async beforeBot(context: mls.msg.ExecutionContext, msg: string, toolsBeforeSendMessage: mls.bots.ToolsBeforeSendMessage[]): Promise<Record<string, any>> {
            throw new Error('Not implement');
        },
        async afterBot(context: mls.msg.ExecutionContext, output: mls.msg.BotOutput): Promise<string> {
            throw new Error('Not implement');

        }
    };
}

const _beforePrompt = async (context: mls.msg.ExecutionContext): Promise<void> => {
    const taskTitle = "Planning...";
    if (!context || !context.message) throw new Error("Invalid context");
    if (!context.task) {
        let prompt = context.message.content.trim();
        const textSearch = '/' + agentName
        const indexText = context.message.content.indexOf(textSearch);
        if (indexText > -1) {
            prompt = context.message.content.substring(indexText + textSearch.length).trim();
        }
        let inputs: any = await getPrompts(prompt);
        let data = mls.common.safeParseArgs(prompt);
        let userMessage = context.message.content
        const isUserPrompt = 'page' in data && 'prompt' in data;
        if (isUserPrompt) {
            inputs = await getPromptsToUpdate(data as IDataPrompt);     
            const payload = {
                isUpdate: true,
                prompt: data.prompt
            }
            userMessage = JSON.stringify(payload);
        }
        await startNewAiTask(agentName, taskTitle, userMessage, context.message.threadId, context.message.senderId, inputs, context, _afterPrompt);
        return;
    }

    /**
     *  
     * If context.task is undefined or null, 
     *    it means this agent was triggered by another agent.  
     * 
    */
    
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

    const hasError = payload[0].type === 'result';
    if (hasError) {
        const status = payload[0].status;
        const message = (payload[0] as any).message || '';
        throw new Error(`[${agentName}](afterPrompt) ${status}: ${message}`)
    }
    const result: PayloadOk = (payload[0] as any).result

    context = await updateStepStatus(context, step.stepId, "completed");
    if (context.task) context.task = await updateTaskTitle(context.task, "Done");

    notifyTaskChange(context);
    await executeNextStep(context);
    
    debugger;
    if (!result.isUpdate) {
        await createFile(result);
        await createOrUpdateProjectFile(result);
        await createOrUpdateModuleFile(result);
    }
    else {
        updateFile(result);
    }
}

async function createFile(contents: PayloadOk) {

    const { projectId, folder, shortName, group } = contents.defs.meta;

    const info = { project: projectId, shortName, folder };
    const pageTagName = convertFileNameToTag(info);
    const sourceTS = contents.pageTs;
    const sourceHTML = contents.pageHtml;
    const sourceLess = generateLessPage(info, group!, pageTagName, '');;
    const sourceDefs = generateDefsPage(info, group!, contents.defs);

    await createNewFile({
        project,
        folder,
        shortName,
        position: 'right',
        enhancement: enhancementTs,
        sourceTS: sourceTS.trim(),
        sourceHTML,
        sourceLess,
        sourceDefs,
        openPreview: false
    });

    console.info(`createFile - page created: ${folder}/${shortName}`);

}

async function createOrUpdateProjectFile(contents: PayloadOk) {

    const { projectId, folder } = contents.defs.meta;
    const moduleName: string = folder
    const project: number = projectId

    const res = await addModule(project, moduleName, true); // add or create
    if (!res.ok) throw new Error(`[${agentName}](createProjectFile) ${res.message}`)

}

async function createOrUpdateModuleFile(contents: PayloadOk) { 
    
    const { projectId, folder } = contents.defs.meta;
    const moduleName: string = folder
    const shortName = 'module'

    const key = mls.stor.getKeyToFiles(projectId, 2, shortName, folder, '.ts');
    const storFile = mls.stor.files[key];
    const initTag = getInitialTag(shortName, projectId, folder, moduleName);
    
    if (!storFile) { 
        const fmConfig = getFirstModuleConfig(folder, shortName);
        const enhancement = '_blank'
        const content = formatModuleContent(initTag, fmConfig);
        await createNewFile({ project: projectId, shortName, folder, position: 'right', enhancement, sourceTS: content.trim(), sourceHTML: '', sourceLess: '', sourceDefs: '', openPreview: false });
        return { ok: true };
    }

    const modelTS = getModel({ project: projectId, shortName, folder });
    if (!modelTS) return { ok: false, message: 'No models found' }
    if (!modelTS.ts) return { ok: false, message: 'No models.ts found' }
    const model = modelTS.ts.model;

    const moduleConfig: ModuleConfig = await collabImport({
        folder: folder,
        project: projectId,
        shortName,
        extension: ".ts",
    });

    if (!moduleConfig) {
        return { ok: false, message: "Config not found" };
    }

    const newMenuItem = getNewMenuItem(shortName);
    if (!moduleConfig.menu) {
        moduleConfig.menu = [newMenuItem];
    } else {
        const m = moduleConfig.menu.filter((item: MenuItem) => item.pageName === shortName)
        if (m.length > 0) return { ok: true } // menu alredy exists
        moduleConfig.menu.push(newMenuItem);
    }

    const content = formatModuleContent(initTag, moduleConfig); 
    
    model.setValue(content.trim());
    return { ok: true };
}

function getInitialTag(shortName: string, projectId: number, folder: string, groupName: string): string {
    /* 
    ex. initial file tag
    <mls shortName="module" project="102022" enhancement="_blank" folder="areaoftest" groupName="areaoftest" />
    */
    const textTag = `///<mls shortName="${shortName}" project="${projectId}" enhancement="_blank" folder="${folder}" groupName="${groupName}" />`;
    return textTag;
}

function getFirstModuleConfig(theme: string, shortName: string): ModuleConfig {

    const moduleConfig = {
        theme,
        initialPage: shortName,
        menu: [getNewMenuItem(shortName)]  
    }

    return moduleConfig;

}

function getNewMenuItem(shortName: string): MenuItem {
    return {
                pageName: shortName,
                title: formatPageTitle(shortName),
                auth: 'admin',
                icon: `<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M341.8 72.6C329.5 61.2 310.5 61.2 298.3 72.6L74.3 280.6C64.7 289.6 61.5 303.5 66.3 315.7C71.1 327.9 82.8 336 96 336L112 336L112 512C112 547.3 140.7 576 176 576L464 576C499.3 576 528 547.3 528 512L528 336L544 336C557.2 336 569 327.9 573.8 315.7C578.6 303.5 575.4 289.5 565.8 280.6L341.8 72.6zM304 384L336 384C362.5 384 384 405.5 384 432L384 528L256 528L256 432C256 405.5 277.5 384 304 384z"/></svg>`
            }
}

function formatPageTitle(key: string): string {
  const textWithSpaces = key.replace(/([A-Z]|\d+)/g, ' $1');
  const result = textWithSpaces.charAt(0).toUpperCase() + textWithSpaces.slice(1);
  return result.trim();
}

function formatModuleContent(initialTag: string, moduleConfig: ModuleConfig): string {
    return  `${initialTag}
    
    export const moduleConfig = ${JSON.stringify(moduleConfig)}`  
}

async function updateFile(contents: PayloadOk) {    
    let defs: mls.l4.BaseDefs | string = contents.defs;

    if (typeof defs === 'string') {
        defs = extracJsonFromDefs(defs);        
        contents.defs = JSON.parse(defs);        
    }    
    const { projectId, folder, shortName, group } = contents.defs.meta;

    const serviceSource: ServiceSource100554 = getState(`serviceSource.left.service`);
    if (!serviceSource) throw new Error('Not found service source instance');

    const models = getModel({ folder: folder || '', project: projectId, shortName });
    if (!models) throw new Error(`[${agentName}] updateFile: Not found models`);

    const contentHTML = contents.pageHtml;
    const contentTS = contents.pageTs;
    const contentDefs = contents.defs;
    const contentLess = contents.pageLess;

    if (contentDefs && models.defs) {
        //serviceSource.setValueInModeKeepingUndo(models.defs.model, contentDefs, false);
    }

    if (contentHTML && models.html) {
        serviceSource.setValueInModeKeepingUndo(models.html.model, contentHTML, false);
    }

    if (contentTS && models.ts) {
        serviceSource.setValueInModeKeepingUndo(models.ts.model, contentTS, false);
        const ok = await mls.l2.typescript.compileAndPostProcess(models.ts, true, false);
    }
    if (contentLess && models.style) {
        /*
        const resultLessComponent2 = await prepareComponentCss(contentLess, +projectMemory, folderMemory || '');
        serviceSource.setValueInModeKeepingUndo(models.style.model, resultLessComponent2, false);
        // models.style.model.setValue(resultLessComponent2);
        const ok = await mls.l2.less.compileStyle(models.style);
        hasErrorLess = ok === false;
        */
    }
}

/*async function getContentsFromFiles(pageName: string): Promise<{
    defs: mls.l4.BaseDefs,
    pageHtml: string,
    pageLess: string,
    pageTs: string
}> {

    const level = 2;
    const fn = getFileName(pageName, level);

    const pageTs = await mls.stor.files[fn + '.ts'].getContent('') as string;
    const pageHtml = await mls.stor.files[fn + '.html'].getContent('') as string;
    let defsStr = await mls.stor.files[fn + '.defs.ts'].getContent('') as string;
    const pageLess = await mls.stor.files[fn + '.less'].getContent('') as string;
    defsStr = extracJsonFromDefs(defsStr);
    if (!defsStr || defsStr === '') throw new Error(`[${agentName}](getContentsFromFiles) Invalid defs.`)
    const defs = JSON.parse(defsStr);

    return {
        defs,
        pageHtml,
        pageLess,
        pageTs,
    }

}*/

function extracJsonFromDefs(str: string): string {
    const start = str.indexOf('{');
    const end = str.lastIndexOf('}');

    if (start !== -1 && end !== -1 && end > start) {
        return (str.substring(start, end + 1)).replace(/\\"/g, '"');
    } else {
        return ''; // ou lançar erro, dependendo do caso
    }
}

/*
function getFileName(page: string, nivel: number): string {
    // Remove o primeiro "_" inicial, se existir
    const cleaned = page.startsWith("_") ? page.substring(1) : page;

    // Extrai o número do projeto (até o próximo '_')
    const firstUnderscoreIndex = cleaned.indexOf("_");
    if (firstUnderscoreIndex === -1) {
        throw new Error("Formato inválido. Não foi possível localizar o código do projeto.");
    }

    const projectCode = cleaned.substring(0, firstUnderscoreIndex);
    const rest = cleaned.substring(firstUnderscoreIndex + 1);

    // Monta o nome final

    return `${projectCode}_${nivel}_${rest}`;
}
*/

function getModel(info: { project: number, shortName: string, folder: string }): mls.editor.IModels | undefined {
    const key = mls.editor.getKeyModel(info.project, info.shortName, info.folder, 2);
    return mls.editor.models[key];
}

function generateLessPage(
    info: {
        shortName: string;
        project: number;
        folder: string;
    },
    groupName: string,
    pageTagName: string,
    htmlString: string
): string {

    const enhancement = enhancementStyle;
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    const styles = doc.querySelectorAll('style[type="text/less"]');
    const resultStyles = Array.from(styles).map(style => ({
        name: style.getAttribute('data-name'),
        content: style.textContent
    }));

    const tagNameWithoutFolder = convertFileNameToTag({ shortName: info.shortName, project: info.project });
    let styleData = resultStyles.find((result) => result.name === `page-${tagNameWithoutFolder}`); // page-home-100554
    if (!styleData) styleData = resultStyles.find((result) => result.name === `page-${info.shortName}`); //page-adminPanel
    if (!styleData) return "";

    if (styleData && !styleData.content) return "";
    const lessContent = '';//replacePageLessTag(styleData.content as string, info.project, info.shortName, pageTagName);
    const lessResult = `/// <mls shortName="${info.shortName}" project="${info.project}" folder="${info.folder}" groupName="${groupName}" enhancement="${enhancement}" />\n\n ${lessContent}`;
    return lessResult;

}

function generateDefsPage(
    info: {
        shortName: string;
        project: number;
        folder: string;
    },
    groupName: string,
    defs: mls.l4.BaseDefs
): string {

    return `/// <mls shortName="${info.shortName}" project="${info.project}" folder="${info.folder}" groupName="${groupName}" enhancement="_blank" />\n\n` +
        `// Do not change – automatically generated code.\n\n` +
        `export const defs: mls.l4.BaseDefs = ${JSON.stringify(defs, null, 2)}\n\n

`;
}

async function getContentByExtension(fullName: string, ext: 'html' | 'ts' | 'style' | 'defs') {

    const info = mls.l2.getPath(fullName);
    try {
        const models = getModel(info)
        if (!models) throw new Error(`[${agentName}][getContentByExtension]:Not found models for file:` + info.shortName);
        if (!models[ext]) return '';
        return models[ext]?.model.getValue();
    } catch (e: any) {
        throw new Error(`[${agentName}][getContentByExtension]: ${e.message}`);
    }
}

async function getPrompts(userPrompt: string): Promise<mls.msg.IAMessageInputType[]> {

    const dataForReplace = {
        userPrompt,
        projectId: mls.actualProject
    }

    const prompts = await getPromptByHtml({ project, shortName: agentName, folder: '', data: dataForReplace })
    return prompts;
}


async function getPromptsToUpdate(data: IDataPrompt): Promise<mls.msg.IAMessageInputType[]> {

    const moduleDefs = await import(`/${data.page}.defs.js`);
    
    let mode: string = '';
    let fileName: string = data.page;

    if (moduleDefs && moduleDefs.defs?.meta) {
        mode = moduleDefs.defs.meta.type;
        fileName = moduleDefs.defs.meta.shortName;
    }

    const html = await getContentByExtension(data.page, 'html');
    if (!html) throw new Error(`[${agentName}] getPrompts: No html found.`);
    const htmlCompiled = '';

    const ts = await getContentByExtension(data.page, 'ts');
    if (!ts) throw new Error(`[${agentName}] getPrompts: No ts found.`);

    const less = await getContentByExtension(data.page, 'style');
    if (!less) throw new Error(`[${agentName}] getPrompts: No ts found.`);

    const defs = await getContentByExtension(data.page, 'defs');
    if (!defs) throw new Error(`[${agentName}] getPrompts: No defs found.`);

    const dataForReplace = {
        userPrompt: JSON.stringify({ isUpdate: true, prompt: data.prompt}),
        html,
        htmlCompiled,
        mode,
        fileName, 
        defs,
        ts,
        less
    }

    const prompts = await getPromptByHtml({ project, shortName: agentName, folder: '', data: dataForReplace })
    return prompts;
}

interface ModuleConfig {
    theme: string;
    initialPage: string;
    menu: MenuItem[];
}

interface MenuItem {
    pageName: string;
    title: string;
    auth: string;
    icon: string;
}

interface IDataPrompt {
    page: string,
    prompt: string
}

export interface PayloadOk {
    pageTs: string;
    pageHtml: string;
    defs: mls.l4.BaseDefs;
    pageLess?: string;
    isUpdate: boolean;
}

export interface PayloadUpdate {
    defs?: mls.l4.BaseDefs;
    prompt?: string;
    isUpdate: boolean;
}
