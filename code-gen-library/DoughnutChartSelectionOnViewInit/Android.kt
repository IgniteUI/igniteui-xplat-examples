//begin imports
import com.infragistics.mobile.controls.IgaRingSeries;
import com.infragistics.mobile.controls.IgaPropertyEditorPropertyDescription;
//end imports

public class DoughnutChartSelectionOnViewInit {
    //begin eventHandler
    //Kotlin: Action
    public fun doughnutChartSelectionOnViewInit() {
        DoughnutChartSelectionReadout.show(
            CodeGenHelper.findByName<IgaRingSeries>("ringSeries")!!,
            CodeGenHelper.findByName<IgaPropertyEditorPropertyDescription>("SelectedSlice")!!,
            0);
    }
    //end eventHandler
}
