//begin imports
import { IgcPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-react-layouts';
//end imports

export class WebHierarchicalGridChangePinningConfig {
    //begin eventHandler
    public webHierarchicalGridChangePinningConfig(sender: any, args: IgrPropertyEditorPropertyDescriptionChangedEventArgs): void {
        var newPinningPosition = args.newValue === "Top" ? RowPinningPosition.Top : RowPinningPosition.Bottom;
        this.grid.pinning.rows = newPinningPosition;
        var rowIsland1 = this.grid.contentChildLayoutList.filter(e => e.childDataKey == 'Albums');
        rowIsland1[0].pinning.rows = newPinningPosition;
    	var rowIsland2 = rowIsland1[0].contentChildLayoutList.filter(e => e.childDataKey == 'Songs');
    	if(rowIsland2[0]) {
            rowIsland2[0].pinning.rows = newPinningPosition;
        }
        var rowIsland3 = this.grid.contentChildLayoutList.filter(e => e.childDataKey == 'Tours');
        if(rowIsland3[0]) {
            rowIsland3[0].pinning.rows = newPinningPosition
        }
    }
    //end eventHandler
}