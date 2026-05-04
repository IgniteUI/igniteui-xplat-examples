//begin imports
import UIKit;
import Foundation
//end imports

class TestsRadialGaugeFormatLabelWithAllValues {

    //begin eventHandler
    func testsRadialGaugeFormatLabelWithAllValues(sender: Any?, args: IgsAlignRadialGaugeLabelEventArgs?) {
        
		
		let radToDeg = 180.0 / Double.pi

		let angleDeg      = (args!.angle * radToDeg).rounded(.toNearestOrEven)
		let startAngleDeg = (args!.startAngle * radToDeg).rounded(.toNearestOrEven)
		let endAngleDeg   = (args!.endAngle * radToDeg).rounded(.toNearestOrEven)

		args!.label =
		  "Value:\(args!.value)," +
		  "Angle:\(Int(angleDeg))," +
		  "StartAngle:\(Int(startAngleDeg))," +
		  "EndAngle:\(Int(endAngleDeg))," +
		  "ActualMinimumValue:\(args!.actualMinimumValue)," +
		  "ActualMaximumValue:\(args!.actualMaximumValue)"


    }
    //end eventHandler

}
