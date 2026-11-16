//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Maps;
//end imports

public class EditorButtonAzureImageryDarkGrey
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionButtonClickEventHandler
    public void EditorButtonAzureImageryDarkGrey(object sender, PropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        var map = CodeGenHelper.GetDescription<XamGeographicMap>("content");
        var imagery = map.BackgroundContent as AzureMapsImagery;
        if (imagery != null)
        {
            imagery.ImageryStyle = AzureMapsImageryStyle.DarkGrey;
        }
    }
    //end eventHandler
}
