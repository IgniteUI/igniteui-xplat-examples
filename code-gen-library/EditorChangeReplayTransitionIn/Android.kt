//begin imports
import com.infragistics.mobile.controls.IgaPropertyEditorPropertyDescriptionChangedEventArgs;
import com.infragistics.mobile.controls.IgaDataChart;
//end imports

import com.infragistics.mobile.controls.CodeGenHelper;

public class EditorChangeReplayTransitionIn {
    //begin eventHandler
    public fun editorChangeReplayTransitionIn(sender: Any?, args: IgaPropertyEditorPropertyDescriptionChangedEventArgs?) {
        var series = CodeGenHelper.getDescription<IgaDataChart>("content").series!!;
        for (i in 0..< series.length) {
            series[i]!!.replayTransitionIn();
        }
    }
    //end eventHandler
}