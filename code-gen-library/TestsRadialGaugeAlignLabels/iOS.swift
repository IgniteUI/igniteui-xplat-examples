//begin imports
import UIKit;
//end imports

class TestsRadialGaugeAlignLabels {

    //begin eventHandler
    func TestsRadialGaugeAlignLabels(sender: Any?, args: AlignRadialGaugeLabelEventArgs?) {
        let o = CodeGenHelper.findByName(Any.self, "LabelAlignValues")
        let parser = JsonDictionaryParser()
        let obj = parser.parse(json_: (o as! JsonDictionaryValue).value as! String) as! JsonDictionaryObject

        let x = (obj["X"] as! JsonDictionaryValue).value as! Double
		let y = (obj["Y"] as! JsonDictionaryValue).value as! Double
		args.label = String(format: "%.3f", args.value) 
		args.offsetX = x;
        args.offsetY = y;
    }
    //end eventHandler

}
