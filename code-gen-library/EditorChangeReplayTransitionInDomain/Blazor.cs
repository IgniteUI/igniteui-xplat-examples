//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class EditorChangeReplayTransitionInDomain
{
    //begin eventHandler
    public void EditorChangeReplayTransitionInDomain(IgbPropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        // The editor has already written the new value onto the chart; replaying is what makes the
        // change visible, since a transition only shows while it is running.
        var chart = CodeGenHelper.GetDescription<IgbDomainChart>("content");
        chart.ReplayTransitionIn();
    }
    //end eventHandler
}
