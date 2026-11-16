//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
//end imports

public class EditorChangeAzureImageryApiKey
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionChangedEventHandler
    public void EditorChangeAzureImageryApiKey(object sender, PropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        var apiKey = CodeGenHelper.GetSharedSupporting<MapAzureImageryApiKey>("MapAzureImageryApiKey");
        apiKey.Key = args.NewValue?.ToString()?.Trim() ?? "";
    }
    //end eventHandler
}
