export class WebTreeGridUnitPriceCellClassesHandler {
//begin eventHandler
public webTreeGridUnitPriceCellClassesHandler = {
    downPrice: (rowData: any, columnKey: any): boolean => rowData[columnKey] <= 5,
    upPrice: (rowData: any, columnKey: any): boolean => rowData[columnKey] > 5,
}
//end eventHandler
    
public requiredStyles = `
<!--begin styles-->
.upPrice {
    color: red !important;
}

.downPrice {
    color: green !important;
}
<!--end styles-->
`;
}