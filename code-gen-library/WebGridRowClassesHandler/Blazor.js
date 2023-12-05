//begin eventHandler
igRegisterScript("WebGridRowClassesHandler", () => {
    return {
        activeRow: (row) => row.index % 2 === 0
    };
}, true);
//end eventHandler

let requiredStyles = `
<!--begin styles-->
.activeRow {
    border-top: 2px solid #fc81b8;
    border-left: 3px solid #e41c77;
}
<!--end styles-->
`;