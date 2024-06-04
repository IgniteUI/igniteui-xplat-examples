//begin imports
import { IgcPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-react-layouts';
//end imports

export class WebTreeGridChangeSummaryPosition {
  //begin eventHandler
  public webTreeGridChangeSummaryPosition(sender: any, args: IgrPropertyEditorPropertyDescriptionChangedEventArgs): void {
    this.treeGrid.summaryPosition = args.newValue;
  }
  //end eventHandler
}