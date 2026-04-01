//begin imports
import UIKit;
//end imports

class TestsRadialGaugePrependLabels {

    //begin eventHandler
    func testsRadialGaugePrependLabels(sender: Any?, args: AlignLinearGraphLabelEventArgs?) {
        let o = CodeGenHelper.findByName(Any.self, "LabelPrependValue")
		let parser = JsonDictionaryParser()
        let obj = parser.parse(json_: (o as! JsonDictionaryValue).value as! String) as! JsonDictionaryObject
        let v = (obj["Text"] as! JsonDictionaryValue).value as! String		
		args.label = v + String(describing: args.value)
    }
    //end eventHandler

}
