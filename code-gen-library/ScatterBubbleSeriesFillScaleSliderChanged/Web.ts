//begin imports
import { IgcPropertyEditorPropertyDescriptionChangedEventArgs, IgcPropertyEditorPropertyDescriptionComponent } from 'igniteui-webcomponents-layouts';
import { IgcBubbleSeriesComponent } from 'igniteui-webcomponents-charts';
import { EnumUtil } from 'igniteui-webcomponents-core';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class ScatterBubbleSeriesFillScaleSliderChanged {
    //begin eventHandler
    public scatterBubbleSeriesFillScaleSliderChanged(sender: any, args: IgcPropertyEditorPropertyDescriptionChangedEventArgs): void {
        let series: IgcBubbleSeriesComponent = this.chart.actualSeries[0] as IgcBubbleSeriesComponent;

        let fillScale = (series.fillScale as any);

        if(args.newValue >= 25000){
            fillScale.maximumValue = args.newValue;            
        }
        else{
            fillScale.minimumValue = args.newValue;
        }
    }
    //end eventHandler
}