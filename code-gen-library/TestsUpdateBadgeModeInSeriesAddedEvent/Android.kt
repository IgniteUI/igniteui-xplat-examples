//begin imports
import com.infragistics.mobile.controls.IgaChartSeriesEventArgs
import com.infragistics.mobile.controls.IgaLegendItemBadgeMode
//end imports

class TestsUpdateBadgeModeInSeriesAddedEvent {

    //begin eventHandler
    fun testsUpdateBadgeModeInSeriesAddedEvent(sender: Any?, args: IgaChartSeriesEventArgs) {
        args.series!!.legendItemBadgeMode = IgaLegendItemBadgeMode.MATCH_SERIES;
    }
    //end eventHandler

}