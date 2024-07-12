//begin imports
import { IgrPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-react-layouts';
import { RowPinningPosition, IgrHierarchicalGrid } from 'igniteui-react-grids';
//end imports

export class WebHierarchicalGridChangePinningConfig {
    //begin eventHandler
    public webHierarchicalGridChangePinningConfig(sender: any, args: IgrPropertyEditorPropertyDescriptionChangedEventArgs): void {
        var newPinningPosition = args.newValue === "Top" ? RowPinningPosition.Top : RowPinningPosition.Bottom;
        var grid = CodeGenHelper.getDescription<IgrHierarchicalGrid>("content");
        grid.pinning.rows = newPinningPosition;
        var rowIsland1 = grid.contentChildLayoutList.filter(e => e.childDataKey == 'Albums');
        rowIsland1[0].pinning.rows = newPinningPosition;
    	var rowIsland2 = rowIsland1[0].contentChildLayoutList.filter(e => e.childDataKey == 'Songs');
    	if(rowIsland2[0]) {
            rowIsland2[0].pinning.rows = newPinningPosition;
        }
        var rowIsland3 = grid.contentChildLayoutList.filter(e => e.childDataKey == 'Tours');
        if(rowIsland3[0]) {
            rowIsland3[0].pinning.rows = newPinningPosition
        }
    }
    //end eventHandler
}