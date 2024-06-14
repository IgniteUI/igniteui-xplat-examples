//begin imports
import { IgcPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-react-layouts';
import { IgrTreeGrid } from 'igniteui-react-grids'; 
//end imports

export class WebTreeGridChangeSummaryCalculationMode {
  //begin eventHandler
  public webTreeGridChangeSummaryCalculationMode(sender: any, args: IgrPropertyEditorPropertyDescriptionChangedEventArgs): void {
    var treeGrid = CodeGenHelper.getDescription<IgrTreeGrid>("content");
    treeGrid.summaryCalculationMode = args.newValue;
  }
  //end eventHandler
}