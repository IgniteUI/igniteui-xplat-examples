//begin imports
import UIKit;
//end imports

class TestsRadialGaugeFormatLabelWithDecimals {

    //begin eventHandler
    func testsRadialGaugeFormatLabelWithDecimals(sender: Any?, args: IgsFormatRadialGaugeLabelEventArgs?) {
        
		args!.label = String(format: "%.3f", args!.value) 

    }
    //end eventHandler

}
