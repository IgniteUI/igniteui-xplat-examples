//begin imports

//end imports

import com.infragistics.mobile.controls.CodeGenHelper;

public class ScatterBubbleSeriesFillScaleSliderChanged {
    //begin eventHandler
    public fun scatterBubbleSeriesFillScaleSliderChanged(sender: Any?, args: IgaPropertyEditorPropertyDescriptionChangedEventArgs?) {

        var chart = CodeGenHelper.getDescription<IgaDataChart>("content");

        var series: IgaBubbleSeries = chart.series[0] as IgaBubbleSeries;

        var fillScale = series.fillScale;

        if(args.newValue >= 25000){
            fillScale.maximumValue = args.newValue;            
        }
        else{
            fillScale.minimumValue = args.newValue;
        }
    }
    //end eventHandler
}