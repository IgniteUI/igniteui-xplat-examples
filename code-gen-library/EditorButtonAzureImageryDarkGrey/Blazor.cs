//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class EditorButtonAzureImageryDarkGrey
{
    //begin eventHandler
    public void EditorButtonAzureImageryDarkGrey(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var map = CodeGenHelper.GetDescription<IgbGeographicMap>("content");
        var imagery = map.BackgroundContent as IgbAzureMapsImagery;
        if (imagery != null)
        {
            imagery.ImageryStyle = AzureMapsImageryStyle.DarkGrey;
        }
    }
    //end eventHandler
}
