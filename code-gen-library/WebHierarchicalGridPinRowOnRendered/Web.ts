//begin imports
import { IgcHierarchicalGridComponent } from 'igniteui-webcomponents-grids/grids';
//end imports

export class WebHierarchicalGridPinRowOnRendered {
    //begin eventHandler
    public webHierarchicalGridPinRowOnRendered(): void {
		var hierarchicalGrid = CodeGenHelper.getDescription<IgcHierarchicalGridComponent>("content");
		hierarchicalGrid.pinRow(hierarchicalGrid.data[0].Photo);
		hierarchicalGrid.pinRow(hierarchicalGrid.data[1].Photo);
    }
    //end eventHandler
}