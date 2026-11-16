//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class EditorButtonAzureImagerySetApiKey
{
    //begin eventHandler
    public void EditorButtonAzureImagerySetApiKey(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var apiKey = CodeGenHelper.GetSharedSupporting<MapAzureImageryApiKey>("MapAzureImageryApiKey");
        var map = CodeGenHelper.GetDescription<IgbGeographicMap>("content");
        var imagery = map.BackgroundContent as IgbAzureMapsImagery;
        if (imagery != null && !string.IsNullOrEmpty(apiKey.Key))
        {
            imagery.ApiKey = apiKey.Key;
        }
    }
    //end eventHandler
}
