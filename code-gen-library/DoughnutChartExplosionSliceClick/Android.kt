//begin imports
import com.infragistics.mobile.controls.IgaSliceClickEventArgs;
//end imports

public class DoughnutChartExplosionSliceClick {
    //begin eventHandler
    public fun doughnutChartExplosionSliceClick(sender: Any?, args: IgaSliceClickEventArgs?) {
        val eventArgs = args!!;
        eventArgs.isExploded = !eventArgs.isExploded;
    }
    //end eventHandler
}
