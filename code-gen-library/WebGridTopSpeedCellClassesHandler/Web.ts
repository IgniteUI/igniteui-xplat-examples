//begin imports
//end imports

export class WebGridTopSpeedCellClassesHandler {
//begin eventHandler
    public webGridTopSpeedCellClassesHandler = {
        topSpeed: (rowData: any, columnKey: any): boolean => rowData[columnKey] < 5
    }
//end eventHandler

public requiredStyles = `
<!--begin styles-->
.topSpeed {
    color: royalblue !important;
}
<!--end styles-->
`;
}