//begin imports
import UIKit;
//end imports

class TestsLinearGaugePrependLabels {

    //begin eventHandler
    func testsLinearGaugePrependLabels(sender: Any?, args: IgsFormatLinearGraphLabelEventArgs?) {
        let o = CodeGenHelper.findByName(Any.self, "LabelPrependValue")
		let parser = JsonDictionaryParser()
        let obj = parser.parse(json_: (o as! JsonDictionaryValue).value as! String) as! JsonDictionaryObject
        let v = (obj["Text"] as! JsonDictionaryValue).value as! String		
		args!.label = v + (NumberUtil.doubleToMinDecimalsString(value: args!.value) ?? "")
    }
    //end eventHandler

}
