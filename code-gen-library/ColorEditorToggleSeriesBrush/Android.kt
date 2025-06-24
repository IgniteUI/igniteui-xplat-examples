//begin imports
import com.infragistics.mobile.controls.IgaToolCommandEventArgs;
import com.infragistics.mobile.controls.IgaDataChart;
import com.infragistics.mobile.controls.IgaSeries;
import com.infragistics.mobile.controls.IgaBrush;
//end imports

import com.infragistics.mobile.controls.CodeGenHelper;

public class ColorEditorToggleSeriesBrush {
    //begin eventHandler
    public fun colorEditorToggleSeriesBrush(sender: Any?, args: IgaToolCommandEventArgs) {
        var target = CodeGenHelper.getDescription<IgaDataChart>("content")!!;
        var color = args.command!!.argumentsList!![0]!!.value;

		when (args.command!!.commandId!!)
		{
            "ToggleSeriesBrush" -> {
                var series = target.series[0] as IgaSeries;
                series.brush = color as IgaBrush?;
                break;
            }
        }
        
    }
    //end eventHandler
}