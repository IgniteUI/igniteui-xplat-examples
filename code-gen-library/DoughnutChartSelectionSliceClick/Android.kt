//begin imports
import com.infragistics.mobile.controls.IgaRingSeries;
import com.infragistics.mobile.controls.IgaSliceClickEventArgs;
import com.infragistics.mobile.controls.IgaPropertyEditorPropertyDescription;
//end imports

public class DoughnutChartSelectionSliceClick {
    //begin eventHandler
    public fun doughnutChartSelectionSliceClick(sender: Any?, args: IgaSliceClickEventArgs?) {
        DoughnutChartSelectionReadout.show(
            CodeGenHelper.findByName<IgaRingSeries>("ringSeries")!!,
            CodeGenHelper.findByName<IgaPropertyEditorPropertyDescription>("SelectedSlice")!!,
            if (args!!.isSelected) args.index else -1);
    }
    //end eventHandler
}
