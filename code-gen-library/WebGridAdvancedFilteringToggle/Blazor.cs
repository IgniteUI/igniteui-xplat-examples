using IgniteUI.Blazor.Controls;

//begin imports
//end imports

public class webGridAdvancedFilteringToggle
{
    //begin eventHandler
    public async void WebGridAdvancedFilteringToggle(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
{
    var script = @"
    let toolbars = document.querySelectorAll('.igx-grid-toolbar');

    toolbars.forEach(toolbar => {
        let advancedFiltering = toolbar.querySelector('igc-grid-toolbar-advanced-filtering');

        if (advancedFiltering) {
            let currentDisplay = window.getComputedStyle(advancedFiltering).display;
            let newDisplay = currentDisplay === 'none' ? 'block' : 'none';
            advancedFiltering.style.display = newDisplay;
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