//begin imports
//end imports

export class WebHierarchicalGridPinRowOnRendered {
    //begin eventHandler
    public webHierarchicalGridPinRowOnRendered(): void {
		var hierarchicalGrid = document.getElementById("grid") as IgcHierarchicalGridComponent;
		hierarchicalGrid.pinRow(this.singersData[0].Photo);
		hierarchicalGrid.pinRow(this.singersData[1].Photo);
    }
    //end eventHandler
}