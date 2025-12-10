/// <mls shortName="collabRunTime" project="102022" enhancement="_blank" />

(window as any).originalDefine = customElements.define.bind(customElements);
customElements.define = (name, constructor, options) => {
    if (!customElements.get(name)) {
        return (window as any).originalDefine(name, constructor, options);
    }
};