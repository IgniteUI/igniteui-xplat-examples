//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class EditorButtonAzureImagerySatellite
{
    //begin eventHandler
    public void EditorButtonAzureImagerySatellite(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var map = CodeGenHelper.GetDescription<IgbGeographicMap>("content");
        var imagery = map.BackgroundContent as IgbAzureMapsImagery;
        if (imagery != null)
        {
            imagery.ImageryStyle = AzureMapsImageryStyle.Satellite;
        }
    }
    //end eventHandler
}
