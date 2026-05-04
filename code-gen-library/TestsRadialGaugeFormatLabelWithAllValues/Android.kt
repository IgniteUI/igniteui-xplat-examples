//begin imports
import com.infragistics.mobile.controls.IgaFormatRadialGaugeLabelEventArgs
import kotlin.math.PI
import kotlin.math.round

//end imports

class TestsRadialGaugeFormatLabelWithAllValues {

    //begin eventHandler
    fun testsRadialGaugeFormatLabelWithAllValues(sender: Any?, args: IgaFormatRadialGaugeLabelEventArgs) {
	
	
		val radToDeg = 180.0 / PI

		val angleDeg      = round(args.angle * radToDeg)
		val startAngleDeg = round(args.startAngle * radToDeg)
		val endAngleDeg   = round(args.endAngle * radToDeg)

		args.label =
			"Value:$args.value," +
			"Angle:${angleDeg.toInt()}," +
			"StartAngle:${startAngleDeg.toInt()}," +
			"EndAngle:${endAngleDeg.toInt()}," +
			"ActualMinimumValue:$args.actualMinimumValue," +
			"ActualMaximumValue:$args.actualMaximumValue"

    }
    //end eventHandler

}