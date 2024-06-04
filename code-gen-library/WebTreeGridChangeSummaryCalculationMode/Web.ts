//begin imports
import { IgcPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-webcomponents-layouts';
//end imports

export class WebTreeGridChangeSummaryCalculationMode {
    //begin eventHandler
    public webTreeGridChangeSummaryCalculationMode(sender: any, args: IgcPropertyEditorPropertyDescriptionChangedEventArgs): void {
        var treeGrid = document.getElementById('treeGrid') as IgcTreeGridComponent;
        treeGrid.summaryCalculationMode = args.newValue;
    }
    //end eventHandler
}