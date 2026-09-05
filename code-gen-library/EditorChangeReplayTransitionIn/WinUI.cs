//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Charts;
//end imports



public class EditorChangeReplayTransitionIn
{

    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionChangedEventHandler
    public void EditorChangeReplayTransitionIn(object sender, PropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        var series = CodeGenHelper.GetDescription<XamDataChart>("content").Series;
        for (var i = 0; i < series.Count; i++)
        {
            series[i].ReplayTransitionIn();
        }
    }
    //end eventHandler
}