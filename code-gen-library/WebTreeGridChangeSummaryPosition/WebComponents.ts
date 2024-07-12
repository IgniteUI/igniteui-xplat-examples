//begin imports
import { IgcPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-webcomponents-layouts';
import { IgcTreeGridComponent } from 'igniteui-webcomponents-grids/grids';
//end imports

export class WebTreeGridChangeSummaryPosition {
    //begin eventHandler
    public webTreeGridChangeSummaryPosition(sender: any, args: IgcPropertyEditorPropertyDescriptionChangedEventArgs): void {
        var treeGrid = document.getElementById('treeGrid') as IgcTreeGridComponent;
        treeGrid.summaryPosition = args.newValue;
	}
    //end eventHandler
}