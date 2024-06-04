//begin imports
import { IgcPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-react-layouts';
//end imports

export class WebTreeGridChangeSummaryCalculationMode {
  //begin eventHandler
  public webTreeGridChangeSummaryCalculationMode(sender: any, args: IgrPropertyEditorPropertyDescriptionChangedEventArgs): void {
    this.treeGrid.summaryCalculationMode = args.newValue;
  }
  //end eventHandler
}