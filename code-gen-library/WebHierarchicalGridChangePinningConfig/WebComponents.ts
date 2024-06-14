//begin imports
import { IgcPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-webcomponents-layouts';
import { IgcHierarchicalGridComponent, IgcRowIslandComponent, RowPinningPosition } from 'igniteui-webcomponents-grids/grids';
//end imports

export class WebHierarchicalGridChangePinningConfig {
    //begin eventHandler
    public webHierarchicalGridChangePinningConfig(sender: any, args: IgcPropertyEditorPropertyDescriptionChangedEventArgs): void {
        var newPinningPosition = args.newValue === "Top" ? RowPinningPosition.Top : RowPinningPosition.Bottom;
        var hierarchicalGrid = document.getElementById('grid') as IgcHierarchicalGridComponent;
        hierarchicalGrid.pinning.rows = newPinningPosition;
		var rowIsland1 = document.getElementById('rowIsland1') as IgcRowIslandComponent;
        rowIsland1.pinning.rows = newPinningPosition;
		var rowIsland2 = document.getElementById('rowIsland2') as IgcRowIslandComponent;
		if(rowIsland2) {
            rowIsland2.pinning.rows = newPinningPosition;
        }
        var rowIsland3 = document.getElementById('rowIsland3') as IgcRowIslandComponent;
        if(rowIsland3) {
            rowIsland3.pinning.rows = newPinningPosition;
        }
    }
    //end eventHandler
}