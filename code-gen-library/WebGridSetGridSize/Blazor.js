//begin eventHandler
igRegisterScript("WebGridSetGridSize", (sender, evtArgs) => {
    var newVal = evtArgs.newValue.toLowerCase();
    var grid = document.getElementById("treeGrid") || document.getElementById("grid");
    grid.style.setProperty('--ig-size', `var(--ig-size-${newVal})`);
}, false);
//end eventHandler