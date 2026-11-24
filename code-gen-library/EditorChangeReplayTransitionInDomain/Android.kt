//begin imports
import com.infragistics.mobile.controls.IgaDomainChart;
import com.infragistics.mobile.controls.IgaPropertyEditorPropertyDescriptionChangedEventArgs;
//end imports

import com.infragistics.mobile.controls.CodeGenHelper;

public class EditorChangeReplayTransitionInDomain {
    //begin eventHandler
    public fun editorChangeReplayTransitionInDomain(sender: Any?, args: IgaPropertyEditorPropertyDescriptionChangedEventArgs) {
        CodeGenHelper.getDescription<IgaDomainChart>("content")!!.replayTransitionIn();
    }
    //end eventHandler
}
