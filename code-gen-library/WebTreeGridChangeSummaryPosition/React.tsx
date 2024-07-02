//begin imports
import { IgrPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-react-layouts';
import { IgrTreeGrid } from 'igniteui-react-grids'; 
//end imports

export class WebTreeGridChangeSummaryPosition {
  //begin eventHandler
  public webTreeGridChangeSummaryPosition(sender: any, args: IgrPropertyEditorPropertyDescriptionChangedEventArgs): void {
    var treeGrid = CodeGenHelper.getDescription<IgrTreeGrid>("content");
    treeGrid.summaryPosition = args.newValue;
  }
  //end eventHandler
}