//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class EditorButtonAzureImageryRoad
{
    //begin eventHandler
    public void EditorButtonAzureImageryRoad(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var map = CodeGenHelper.GetDescription<IgbGeographicMap>("content");
        var imagery = map.BackgroundContent as IgbAzureMapsImagery;
        if (imagery != null)
        {
            imagery.ImageryStyle = AzureMapsImageryStyle.Road;
        }
    }
    //end eventHandler
}
