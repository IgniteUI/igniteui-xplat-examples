//begin eventHandler
igRegisterScript("WebGridOnEditEnter", (evtArgs) => {
    const column = evtArgs.detail.column;
    if(column.field === 'ReorderLevel') {      
        setTimeout(() => {
            const rowId = evtArgs.detail.cellID.rowID;
            const columnId = evtArgs.detail.cellID.columnID;
            const inputTemplateId = `edit-cell-${rowId}-${columnId}`;
            const element = document.getElementById(inputTemplateId);
            element?.focus();
        });
    }
}, false);
//end eventHandler