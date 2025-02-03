using IgniteUI.Blazor.Controls;

//begin imports
//end imports

public class webGridColumnHidingToggle
{
    //begin eventHandler
    public async void webGridColumnHidingToggle(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
{
    var script = @"
    let toolbars = document.querySelectorAll('.igx-grid-toolbar');

    toolbars.forEach(toolbar => {
        let columnHiding = toolbar.querySelector('igc-grid-toolbar-hiding');

        if (columnHiding) {
            let currentDisplay = window.getComputedStyle(columnHiding).display;
            let newDisplay = currentDisplay === 'none' ? 'block' : 'none';
            columnHiding.style.display = newDisplay;
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