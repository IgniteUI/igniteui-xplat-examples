//begin imports
import com.infragistics.mobile.controls.IgaDataLegend;
import com.infragistics.mobile.controls.DateTimeFormatSpecifier;
//end imports

import com.infragistics.mobile.controls.CodeGenHelper;

public class TestsAddDataLegendHeaderFormatSpecfierTimeShort
{

    //begin eventHandler
	//Kotlin: Action
	public fun testsAddDataLegendHeaderFormatSpecfierTimeShort(){
        var legend = CodeGenHelper.getDescription<IgaDataLegend>("secondary")!!;
       legend.headerFormatSpecifiers = arrayOf(
			DateTimeFormatSpecifier().apply {
				locale = "en-US";
				timeStyle = "short";
			}
	   );
    }
    //end eventHandler

}