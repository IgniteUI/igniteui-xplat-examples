//begin imports
import { IgcPropertyEditorPropertyDescriptionChangedEventArgs, IgcPropertyEditorPropertyDescriptionComponent } from 'igniteui-webcomponents-layouts';
//end imports

export class WebHierarchicalGridChangePinningConfig {
    //begin eventHandler
    public webHierarchicalGridChangePinningConfig(sender: any, args: IgcPropertyEditorPropertyDescriptionChangedEventArgs): void {
		var pinningConfig: IgcPinningConfig = {} as IgcPinningConfig;
		pinningConfig.columns = ColumnPinningPosition.End;
        if(args.newValue === "Bottom"){
            pinningConfig.rows = RowPinningPosition.Bottom;
        } else {
            pinningConfig.rows = RowPinningPosition.Top;
        } 
        var hierarchicalGrid = document.getElementById('hierarchicalGrid') as IgcHierarchicalGridComponent;
        hierarchicalGrid.pinning = pinningConfig;
		var rowIsland1 = document.getElementById('rowIsland1') as IgcRowIslandComponent;
        rowIsland1.pinning = pinningConfig;
		var rowIsland2 = document.getElementById('rowIsland2') as IgcRowIslandComponent;
		if(rowIsland2) {
            rowIsland2.pinning = pinningConfig;
        }
        var rowIsland3 = document.getElementById('rowIsland3') as IgcRowIslandComponent;
        if(rowIsland3) {
            rowIsland3.pinning = pinningConfig;
        }
    }
    //end eventHandler
}