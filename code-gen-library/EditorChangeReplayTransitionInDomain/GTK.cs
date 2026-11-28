//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Charts;
//end imports

public class EditorChangeReplayTransitionInDomain
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionChangedEventHandler
    public void EditorChangeReplayTransitionInDomain(object sender, PropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        // The editor has already written the new value onto the chart; replaying is what makes the
        // change visible, since a transition only shows while it is running.
        var chart = CodeGenHelper.GetDescription<DomainChart>("content");
        chart.ReplayTransitionIn();
    }
    //end eventHandler
}
