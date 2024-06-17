//begin eventHandler
igRegisterScript("WebTreeGridReorderRowStartHandler", (args) => {
    const draggedRow = args.detail.dragElement;
    const row = this.treeGrid.getRowByIndex(draggedRow.getAttribute('data-rowindex'));
    if (row.expanded) {
        row.expanded = false;
    }
}, false);
//end eventHandler