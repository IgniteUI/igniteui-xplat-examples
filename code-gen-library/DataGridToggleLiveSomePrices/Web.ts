//begin imports
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs, IgcPropertyEditorPropertyDescriptionComponent } from 'igniteui-webcomponents-layouts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class DataGridToggleLiveSomePrices {
    //begin eventHandler
    public dataGridToggleLiveSomePrices(sender: any, args: IgcPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        if (this.liveSomePricesDisabled) return;

        this.isUpdatingAllPrices = false;
        this.isUpdatingSomePrices = !this.isUpdatingSomePrices;

        const liveSomeEditor = CodeGenHelper.findByName<IgcPropertyEditorPropertyDescriptionComponent>("LiveSomePricesEditor");

        if (this.isTimerTicking) {
            this.isTimerTicking = false;
            if (liveSomeEditor) liveSomeEditor.primitiveValue = "Live Prices";
            this.liveSomePricesDisabled = false;
            this.liveAllPricesDisabled = false;
        } else {
            this.startTicking();
            if (liveSomeEditor) liveSomeEditor.primitiveValue = "Stop Prices";
            this.liveSomePricesDisabled = false;
            this.liveAllPricesDisabled = true;
        }
    }
    //end eventHandler
}
