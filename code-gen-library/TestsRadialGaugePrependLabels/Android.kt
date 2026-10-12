//begin imports
import com.infragistics.mobile.controls.IgaFormatRadialGaugeLabelEventArgs
import com.infragistics.mobile.controls.JsonDictionaryObject
import com.infragistics.mobile.controls.JsonDictionaryValue
import com.infragistics.mobile.controls.JsonDictionaryArray
import com.infragistics.mobile.controls.JsonDictionaryParser
import com.infragistics.mobile.controls.NumberUtil
//end imports

class TestsRadialGaugePrependLabels {

    //begin eventHandler
    fun testsRadialGaugePrependLabels(sender: Any?, args: IgaFormatRadialGaugeLabelEventArgs) {
	    val o = CodeGenHelper.findByName<Any>("LabelPrependValue")
        var parser = JsonDictionaryParser();
        val obj = parser.parse(((o as JsonDictionaryValue).value as String)) as JsonDictionaryObject;
        val v = (obj["Text"] as JsonDictionaryValue).value as String;
		args.label = v + (NumberUtil.doubleToMinDecimalsString(args.value) ?: "");
    }
    //end eventHandler

}
