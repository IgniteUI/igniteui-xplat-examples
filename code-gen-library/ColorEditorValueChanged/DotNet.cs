//begin imports
using Infragistics.Controls.Inputs;
//end imports

//begin eventHandler
//WPF: Infragistics.Controls.Inputs.ColorEditorPanelSelectedValueChanged
/// <summary>The colour the editor now holds, as the reader's own code would take it.</summary>
public void ColorEditorValueChanged(object sender, ColorEditorPanelSelectedValueChangedEventArgs args)
{
    Console.WriteLine("selected color: " + args.NewValue);
}
//end eventHandler
