//begin imports
import { IgrHierarchicalGrid } from 'igniteui-react-grids';
//end imports

export class WebHierarchicalGridPinRowOnRendered {
    //begin eventHandler
    public webHierarchicalGridPinRowOnRendered(): void {
        var hierarchicalGrid = CodeGenHelper.getDescription<IgrHierarchicalGrid>("content");
        hierarchicalGrid.pinRow(hierarchicalGrid.data[0].Photo);
        hierarchicalGrid.pinRow(hierarchicalGrid.data[1].Photo);
    }
    //end eventHandler
}