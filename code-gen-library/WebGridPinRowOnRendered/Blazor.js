//begin eventHandler
igRegisterScript("WebGridPinRowOnRendered", (event) => {
        const grid = event.target || event.currentTarget;
        
        if (!grid || typeof grid.pinRow !== 'function') { return; }
        
        grid.pinRow("ALFKI", 0);
        grid.pinRow("ANATR", 1);
}, false);

//end eventHandler