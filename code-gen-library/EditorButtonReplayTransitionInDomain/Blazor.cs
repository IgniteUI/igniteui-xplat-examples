//begin imports
using IgniteUI.Blazor.Controls;
using System;
//end imports



public class EditorButtonReplayTransitionInDomain
{

    //begin eventHandler
    public void EditorButtonReplayTransitionInDomain(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var chart = CodeGenHelper.GetDescription<IgbDomainChart>("content");
        chart.ReplayTransitionIn();
        
    }
    //end eventHandler
}