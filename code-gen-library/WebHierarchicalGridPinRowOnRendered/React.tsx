export class WebHierarchicalGridPinRowOnRendered {
    //begin eventHandler
    public webHierarchicalGridPinRowOnRendered(): void {
        this.grid.pinRow(this.singersData[0].Photo);
        this.grid.pinRow(this.singersData[1].Photo);
    }
    //end eventHandler
}