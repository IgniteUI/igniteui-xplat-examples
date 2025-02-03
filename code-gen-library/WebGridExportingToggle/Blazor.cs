using IgniteUI.Blazor.Controls;

//begin imports
//end imports

public class webGridExportingToggle
{
    //begin eventHandler
    public async void webGridExportingToggle(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
{
    var script = @"
    let toolbars = document.querySelectorAll('.igx-grid-toolbar');

    toolbars.forEach(toolbar => {
        let exporting = toolbar.querySelector('igc-grid-toolbar-exporter');

        if (exporting) {
            let currentDisplay = window.getComputedStyle(exporting).display;
            let newDisplay = currentDisplay === 'none' ? 'block' : 'none';
            exporting.style.display = newDisplay;
        } else {
            console.warn('Advanced filtering element NOT found inside toolbar.');
        }
    });
";

    try
    {
        await Task.Run(async () => await IJS.InvokeVoidAsync("eval", script));
    }
    catch (Exception ex)
    {
        Console.WriteLine($"JavaScript execution failed: {ex.Message}");
    }
}
    //end eventHandler
}