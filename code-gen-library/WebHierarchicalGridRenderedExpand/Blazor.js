//begin eventHandler
registerScript("WebHierarchicalGridRenderedExpand", (event) => {
    const hierarchicalGrid = event.target;
    hierarchicalGrid.expandAll();
    setTimeout(() => {
        hierarchicalGrid.getColumnByName("Debut").formatter = (value) => Math.floor(value / 10) * 10 + 's';
    }, 50); 
});
//end eventHandler