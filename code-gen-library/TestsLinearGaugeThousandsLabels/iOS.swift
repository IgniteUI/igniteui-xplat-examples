//begin imports
import UIKit;
//end imports

class TestsLinearGaugeThousandsLabels {

    //begin eventHandler
    func testsLinearGaugeThousandsLabels(sender: Any?, args: FormatLinearGraphLabelEventArgs?) {
        var value = args!.value
		if args!.value > 1000 {
			value = args!.value / 1000
		}
		args!.label = "$\(value) K"
    }
    //end eventHandler

}
