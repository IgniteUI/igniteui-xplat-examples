//begin imports
using IgniteUI.Blazor.Controls;
using System;
//end imports

public class EditorChangeReplayTransitionIn
{

    //begin eventHandler
    public void EditorChangeReplayTransitionIn(IgbPropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        var series = CodeGenHelper.GetDescription<IgbDataChart>("content").ActualSeries;
        for (var i = 0; i < series.Count; i++)
        {
            series[i].ReplayTransitionIn();
        }
    }
    //end eventHandler
}