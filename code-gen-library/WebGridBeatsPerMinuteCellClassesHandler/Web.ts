//begin imports
//end imports

export class WebGridBeatsPerMinuteCellClassesHandler {
//begin eventHandler
    public webGridBeatsPerMinuteCellClassesHandler = {
        upFont: (rowData: any, columnKey: any): boolean => rowData[columnKey] > 95,
        downFont: (rowData: any, columnKey: any): boolean => rowData[columnKey] <= 95
    }
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