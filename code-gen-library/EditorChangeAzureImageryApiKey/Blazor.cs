//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class EditorChangeAzureImageryApiKey
{
    //begin eventHandler
    public void EditorChangeAzureImageryApiKey(IgbPropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        var apiKey = CodeGenHelper.GetSharedSupporting<MapAzureImageryApiKey>("MapAzureImageryApiKey");
        apiKey.Key = args.NewValue?.ToString()?.Trim() ?? "";
    }
    //end eventHandler
}
