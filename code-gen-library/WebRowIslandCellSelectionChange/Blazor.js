//begin eventHandler
igRegisterScript("WebRowIslandCellSelectionChange", (sender, evtArgs) => {
    this.rowIsland = evtArgs.newVal;
}, false);
//end eventHandler