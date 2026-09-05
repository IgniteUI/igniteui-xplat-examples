//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class ColorEditorValueChanged
{
    //begin eventHandler
    /// <summary>The colour the editor now holds, as the reader's own code would take it.</summary>
    public void ColorEditorValueChanged(IgbColorEditorPanelSelectedValueChangedEventArgs args)
    {
        Console.WriteLine("selected color: " + args.NewValue);
    }
    //end eventHandler
}
