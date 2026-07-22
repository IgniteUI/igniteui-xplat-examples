//begin imports
import { IgcPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-webcomponents-layouts';
import { IgcRadialGaugeComponent } from 'igniteui-webcomponents-gauges';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class RadialGaugeSetSize {
    //begin eventHandler
    public radialGaugeSetSize(sender: any, args: IgcPropertyEditorPropertyDescriptionChangedEventArgs): void {
        const gauge = CodeGenHelper.getDescription<IgcRadialGaugeComponent>("content");
        if (!gauge) return;
        const size = args.newValue + "%";
        gauge.width = size;
        gauge.height = size;
    }
    //end eventHandler
}
