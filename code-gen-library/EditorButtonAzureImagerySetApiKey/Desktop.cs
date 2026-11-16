//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Maps;
//end imports

public class EditorButtonAzureImagerySetApiKey
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionButtonClickEventHandler
    public void EditorButtonAzureImagerySetApiKey(object sender, PropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var apiKey = CodeGenHelper.GetSharedSupporting<MapAzureImageryApiKey>("MapAzureImageryApiKey");
        var map = CodeGenHelper.GetDescription<XamGeographicMap>("content");
        var imagery = map.BackgroundContent as AzureMapsImagery;
        if (imagery != null && !string.IsNullOrEmpty(apiKey.Key))
        {
            imagery.ApiKey = apiKey.Key;
        }
    }
    //end eventHandler
}
