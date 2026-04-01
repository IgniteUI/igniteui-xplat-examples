//begin imports
import com.infragistics.mobile.controls.AlignRadialGaugeLabelEventArgs
//end imports

class TestsRadialGaugeAlignLabels {

    //begin eventHandler
    fun testsRadialGaugeAlignLabels(sender: Any?, args: AlignRadialGaugeLabelEventArgs) {
		val o = CodeGenHelper.findByName<Any>("LabelAlignValues")
        var parser = JsonDictionaryParser();
        val obj = parser.parse(((o as JsonDictionaryValue).value as String)) as JsonDictionaryObject;
        
        val x = (obj["X"] as JsonDictionaryValue).value as Double;
		val y = (obj["Y] as JsonDictionaryValue).value as Double;
      
	    args.offsetX = x;
        args.offsetY = y;
    }
    //end eventHandler

}