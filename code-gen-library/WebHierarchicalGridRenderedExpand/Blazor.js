//begin eventHandler
igRegisterScript("WebHierarchicalGridRenderedExpand", (event) => {
    this.hierarchicalGrid.expandAll();
    setTimeout(() => {
        this.hierarchicalGrid.getColumnByName("Debut").formatter = (value) => Math.floor(value / 10) * 10 + 's';
    }, 50); 
}, false);
//end eventHandler