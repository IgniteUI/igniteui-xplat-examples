//begin imports
import com.infragistics.mobile.controls.IgaDataLegend;
import com.infragistics.mobile.controls.DateTimeFormatSpecifier;
//end imports

import com.infragistics.mobile.controls.CodeGenHelper;

public class TestsAddDataLegendHeaderFormatSpecfierLongWeekday
{

    //begin eventHandler
	//Kotlin: Action
	public fun testsAddDataLegendHeaderFormatSpecfierLongWeekday(){
		// TODO: lond weekday cannot currently be set in WPF

	   var legend = CodeGenHelper.getDescription<IgaDataLegend>("secondary")!!;
       legend.headerFormatSpecifiers = arrayOf<Any?>(
			DateTimeFormatSpecifier().apply {
				locale = "en-US";
				dateStyle = "short";
			}
	   );

    }
    //end eventHandler

}