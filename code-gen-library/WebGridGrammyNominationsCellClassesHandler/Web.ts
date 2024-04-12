//begin imports
//end imports

export class WebGridGrammyNominationsCellClassesHandler {
//begin eventHandler
    public webGridGrammyNominationsCellClassesHandler = {
        downFont: (rowData: any, columnKey: any): boolean => rowData[columnKey] < 5,
        upFont: (rowData: any, columnKey: any): boolean => rowData[columnKey] >= 6
    };
//end eventHandler

public requiredStyles = `
<!--begin styles-->
.upFont {
    color: green !important;
}

.downFont {
    color: red !important;
}
<!--end styles-->
`;
}