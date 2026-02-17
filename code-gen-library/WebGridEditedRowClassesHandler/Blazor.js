//begin eventHandler
igRegisterScript("WebGridEditedRowClassesHandler", () => {
    return {
        edited: (row) => updatedRecsPK.indexOf(row.data[row.grid.primaryKey]) !== -1
    };
}, true);
//end eventHandler

let requiredStyles = `
<!--begin styles-->
    .edited {
            font-style: italic;
            color: gray;
    }
<!--end styles-->
`;