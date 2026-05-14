//begin imports
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs, IgcPropertyEditorPropertyDescriptionComponent } from 'igniteui-webcomponents-layouts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class DataGridToggleLiveAllPrices {
    public liveAllPricesDisabled: boolean = false;
    public liveSomePricesDisabled: boolean = false;

    //begin eventHandler
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
