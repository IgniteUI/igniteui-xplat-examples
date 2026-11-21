//begin eventHandler
// Read the live web component, rather than the managed parameter cache.
igRegisterScript("ExtractStandaloneControlState", (container, propertyNames) => {
    const names = propertyNames.map(name => name.charAt(0).toLowerCase() + name.substring(1));
    const findControl = (element, depth) => {
        if (!element || depth > 6) { return null; }
        if (names.every(name => name in element)) { return element; }
        for (const child of element.children || []) {
            const control = findControl(child, depth + 1);
            if (control) { return control; }
        }
        return null;
    };
    const control = findControl(container, 0);
    if (!control) {
        console.error("ExtractStandaloneControlState: no control exposing requested properties", propertyNames);
        return null;
    }
    const facts = {};
    for (let index = 0; index < names.length; index++) {
        const value = control[names[index]];
        // Rect is a wrapper; export its public coordinates explicitly.
        facts[propertyNames[index]] = value != null && typeof value === "object" &&
            "left" in value && "top" in value && "width" in value && "height" in value
            ? { left: value.left, top: value.top, width: value.width, height: value.height }
            : value;
    }
    return facts;
}, false);
//end eventHandler
