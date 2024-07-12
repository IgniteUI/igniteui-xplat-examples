//begin imports
import { IgcPropertyEditorPropertyDescriptionChangedEventArgs, IgcPropertyEditorPropertyDescriptionComponent } from 'igniteui-webcomponents-layouts';
import { IgcBubbleSeriesComponent, IgcDataChartComponent } from 'igniteui-webcomponents-charts';
import { EnumUtil } from 'igniteui-webcomponents-core';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class ScatterBubbleSeriesFillScaleSliderChanged {
    //begin eventHandler
    public scatterBubbleSeriesFillScaleSliderChanged(sender: any, args: IgcPropertyEditorPropertyDescriptionChangedEventArgs): void {

        var chart = CodeGenHelper.getDescription<IgcDataChartComponent>("content");

        let series: IgcBubbleSeriesComponent = chart.actualSeries[0] as IgcBubbleSeriesComponent;

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