//begin imports
import { IgcPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-webcomponents-layouts';
//end imports


export class DataGridApplyLiveDataGrouping {
    //begin emitterOnly
    // useRowGrouping/onGridGroupingAdd/onGridGroupingRemove are owned by
    // DataGridLiveDataTickerOnViewInit. The handlers merge into one sample class
    // at sample-emission time; these stubs keep the per-handler library Holder
    // compilable in isolation.
    public useRowGrouping: boolean = true;
    public onGridGroupingAdd(): void { }
    public onGridGroupingRemove(): void { }
    //end emitterOnly

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
