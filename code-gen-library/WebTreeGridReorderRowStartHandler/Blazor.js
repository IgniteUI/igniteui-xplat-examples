//begin eventHandler
registerScript("WebTreeGridReorderRowStartHandler", (args) => {
    const draggedRow = args.detail.dragElement;
    const row = args.target.getRowByIndex(draggedRow.getAttribute('data-rowindex'));
    if (row.expanded) {
        row.expanded = false;
    }
});
//end eventHandler