//begin imports
import com.infragistics.mobile.controls.IgaPropertyEditorPropertyDescriptionButtonClickEventArgs;
import com.infragistics.mobile.controls.IgaDataChart;
import com.infragistics.mobile.controls.IgaSeries;
//end imports

import com.infragistics.mobile.controls.CodeGenHelper;

public class EditorButtonReplayTransitionIn {
    //begin eventHandler
    public fun editorButtonReplayTransitionIn(sender: Any?, args: IgaPropertyEditorPropertyDescriptionButtonClickEventArgs) {
        var series = CodeGenHelper.getDescription<IgaDataChart>("content").series!!;
        for (i in 0..< series.length) {
            series[i]!!.replayTransitionIn();
        }
    }
    //end eventHandler
}