//begin imports
import com.infragistics.mobile.controls.IgaSliceClickEventArgs
//end imports

public class PieChartExplosionSliceClick {
    //begin eventHandler
    public fun pieChartExplosionSliceClick(sender: Any?, args: IgaSliceClickEventArgs?) {
        val slice = args ?: return
        slice.isExploded = !slice.isExploded
        slice.isSelected = false
    }
    //end eventHandler
}
