//begin imports
import { IgcChartSeriesEventArgs, IgcValueLayerComponent } from 'igniteui-webcomponents-charts';

//end imports

export class TestsUpdateValueLayerPrecisionInSeriesAddedEvent
{
    //begin eventHandler
    public testsUpdateValueLayerPrecisionInSeriesAddedEvent(sender: any,args: IgcChartSeriesEventArgs): void
    {	
        const o: any = CodeGenHelper.findByName("SeriesAddedValueLayerPrecision");
        const obj = JSON.parse(o.toString());

        const precision: number = obj.precision;

        var valueLayer = args.series as IgcValueLayerComponent;
        if (valueLayer) {
            valueLayer.yAxisAnnotationInterpolatedValuePrecision = precision;
        }

    }   

    //end eventHandler
}