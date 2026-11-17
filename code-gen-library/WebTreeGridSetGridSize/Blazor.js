//begin eventHandler
registerScript("WebTreeGridSetGridSize", (sender, evtArgs) => {
    var newVal = evtArgs.newValue.toLowerCase();
    var grid = document.getElementById("treeGrid");
    grid.style.setProperty('--ig-size', `var(--ig-size-${newVal})`);
});
//end eventHandler