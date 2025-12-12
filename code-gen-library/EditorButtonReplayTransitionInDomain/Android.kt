//begin imports
import com.infragistics.mobile.controls.IgaPropertyEditorPropertyDescriptionButtonClickEventArgs;
import com.infragistics.mobile.controls.IgaDataChart;
import com.infragistics.mobile.controls.IgaCategoryChart;
//end imports

import com.infragistics.mobile.controls.CodeGenHelper;

public class EditorButtonReplayTransitionInDomain {
    //begin eventHandler
    public fun editorButtonReplayTransitionInDomain(sender: Any?, args: IgaPropertyEditorPropertyDescriptionButtonClickEventArgs) {
        var chart = CodeGenHelper.getDescription<Any?>("content");

        if (chart is IgaDataChart) {
            chart.replayTransitionIn();
        }
        if (chart is IgaCategoryChart) {
            chart.replayTransitionIn();
        }
    }
    //end eventHandler
}