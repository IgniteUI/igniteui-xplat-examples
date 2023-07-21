//begin imports
using IgniteUI.Blazor.Controls;
using System;
//end imports



public class EditorButtonReplayTransitionIn
{

    //begin eventHandler
    public void EditorButtonReplayTransitionIn(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var series = CodeGenHelper.GetDescription<IgbDataChart>("content").ActualSeries;
        for (var i = 0; i < series.Count; i++)
        {
            series[i].ReplayTransitionIn();
        }
    }
    //end eventHandler
}