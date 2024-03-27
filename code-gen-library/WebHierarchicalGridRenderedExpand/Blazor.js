//begin eventHandler
igRegisterScript("WebHierarchicalGridRenderedExpand", (event) => {
    this.debutColumn.formatter = (value: number) => Math.floor(value / 10) * 10 + 's';
    this.hierarchicalGrid.expandAll();
}, false);
//end eventHandler