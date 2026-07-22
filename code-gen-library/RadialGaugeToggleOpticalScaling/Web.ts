//begin imports
import { IgcPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-webcomponents-layouts';
import { IgcRadialGaugeComponent } from 'igniteui-webcomponents-gauges';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class RadialGaugeToggleOpticalScaling {
    //begin eventHandler
    public radialGaugeToggleOpticalScaling(sender: any, args: IgcPropertyEditorPropertyDescriptionChangedEventArgs): void {
        const gauge = CodeGenHelper.getDescription<IgcRadialGaugeComponent>("content");
        if (!gauge) return;
        gauge.opticalScalingEnabled = !!args.newValue;
    }
    //end eventHandler
}
