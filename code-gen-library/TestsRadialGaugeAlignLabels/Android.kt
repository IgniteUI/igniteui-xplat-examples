//begin imports
import com.infragistics.mobile.controls.JsonDictionaryParser
import com.infragistics.mobile.controls.JsonDictionaryValue
import com.infragistics.mobile.controls.JsonDictionaryObject
import com.infragistics.mobile.controls.IgaAlignRadialGaugeLabelEventArgs
//end imports

class TestsRadialGaugeAlignLabels {

    //begin eventHandler
    fun testsRadialGaugeAlignLabels(sender: Any?, args: IgaAlignRadialGaugeLabelEventArgs) {
		val o = CodeGenHelper.findByName<Any>("LabelAlignValues")
        var parser = JsonDictionaryParser();
        val obj = parser.parse(((o as JsonDictionaryValue).value as String)) as JsonDictionaryObject;
        
        val x = (obj["X"] as JsonDictionaryValue).value as Double;
		val y = (obj["Y"] as JsonDictionaryValue).value as Double;
      
	    args.offsetX = x;
        args.offsetY = y;
    }
    //end eventHandler

}