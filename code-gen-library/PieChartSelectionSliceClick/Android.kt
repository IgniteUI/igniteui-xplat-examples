//begin imports
import com.infragistics.mobile.controls.IgaSliceClickEventArgs
//end imports

public class PieChartSelectionSliceClick {
    //begin eventHandler
    public fun pieChartSelectionSliceClick(sender: Any?, args: IgaSliceClickEventArgs?) {
        val slice = args ?: return
        slice.isExploded = !slice.isExploded
        slice.isSelected = true
    }
    //end eventHandler
}
