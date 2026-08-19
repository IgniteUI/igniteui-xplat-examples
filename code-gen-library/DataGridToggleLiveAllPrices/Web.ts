//begin imports
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs, IgcPropertyEditorPropertyDescriptionComponent } from 'igniteui-webcomponents-layouts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class DataGridToggleLiveAllPrices {
    //begin emitterOnly
    // isUpdatingAllPrices/isUpdatingSomePrices/isTimerTicking/startTicking are owned by
    // DataGridLiveDataTickerOnViewInit. The handlers merge into one sample class at
    // sample-emission time; these stubs keep the per-handler library Holder compilable
    // in isolation.
    public isUpdatingAllPrices: boolean = false;
    public isUpdatingSomePrices: boolean = false;
    public isTimerTicking: boolean = false;
    public startTicking(): void { }
    //end emitterOnly


    //begin eventHandler
    public liveAllPricesDisabled: boolean = false;
    public liveSomePricesDisabled: boolean = false;
    public dataGridToggleLiveAllPrices(sender: any, args: IgcPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        if (this.liveAllPricesDisabled) return;

        this.isUpdatingAllPrices = !this.isUpdatingAllPrices;
        this.isUpdatingSomePrices = false;

        const liveAllEditor = CodeGenHelper.findByName<IgcPropertyEditorPropertyDescriptionComponent>("LiveAllPricesEditor");

        if (this.isTimerTicking) {
            this.isTimerTicking = false;
            if (liveAllEditor) liveAllEditor.primitiveValue = "Live All Prices";
            this.liveAllPricesDisabled = false;
            this.liveSomePricesDisabled = false;
        } else {
            this.startTicking();
            if (liveAllEditor) liveAllEditor.primitiveValue = "Stop All Prices";
            this.liveAllPricesDisabled = false;
            this.liveSomePricesDisabled = true;
        }
    }
    //end eventHandler
}
