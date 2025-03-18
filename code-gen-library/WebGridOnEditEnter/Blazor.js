//begin template
// igRegisterScript("WebGridOnEditEnter", (args) => {
//     const column = args.detail.column;
//     if(column.field === 'ReorderLevel') {
//         setTimeout(() => {
//             const rowId = args.detail.cellID.rowID;
//             const columnId = args.detail.cellID.columnID;
//             const inputTemplateId = `edit-cell-${rowId}-${columnId}`;
//             const x = document.getElementById(inputTemplateId);
//             x?.focus();
//         });
//     }
// }, false);
//end template