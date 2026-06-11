//begin imports
import { IgcPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-webcomponents-layouts';
//end imports


export class DataGridApplyLiveDataGrouping {
    //begin eventHandler
    public dataGridApplyLiveDataGrouping(sender: any, args: IgcPropertyEditorPropertyDescriptionChangedEventArgs): void {
        this.useRowGrouping = !!args.newValue;
        if (this.useRowGrouping)
            this.onGridGroupingAdd();
        else
            this.onGridGroupingRemove();
    }
    //end eventHandler
}
