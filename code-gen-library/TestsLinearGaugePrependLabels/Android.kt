//begin imports
import com.infragistics.mobile.controls.IgaFormatLinearGraphLabelEventArgs
import com.infragistics.mobile.controls.JsonDictionaryObject
import com.infragistics.mobile.controls.JsonDictionaryValue
import com.infragistics.mobile.controls.JsonDictionaryArray
import com.infragistics.mobile.controls.JsonDictionaryParser
//end imports

class TestsLinearGaugePrependLabels {

    //begin eventHandler
    fun testsLinearGaugePrependLabels(sender: Any?, args: IgaFormatLinearGraphLabelEventArgs) {
	    val o = CodeGenHelper.findByName<Any>("LabelPrependValue")
        var parser = JsonDictionaryParser();
        val obj = parser.parse(((o as JsonDictionaryValue).value as String)) as JsonDictionaryObject;
        val v = (obj["Text"] as JsonDictionaryValue).value as String;
		args.label = v + args.value;
    }
    //end eventHandler

}