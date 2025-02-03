using IgniteUI.Blazor.Controls;

//begin imports
//end imports

public class webGridColumnPinningToggle
{
    //begin eventHandler
    public async void webGridColumnPinningToggle(IgbPropertyEditorPropertyDescriptionButtonClickEventArgs args)
{
    var script = @"
    let toolbars = document.querySelectorAll('.igx-grid-toolbar');

    toolbars.forEach(toolbar => {
        let columnPinning = toolbar.querySelector('igc-grid-toolbar-pinning');

        if (columnPinning) {
            let currentDisplay = window.getComputedStyle(columnPinning).display;
            let newDisplay = currentDisplay === 'none' ? 'block' : 'none';
            columnPinning.style.display = newDisplay;
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