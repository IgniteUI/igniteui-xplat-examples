//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Grids;
//end imports

public class WebGridRedo
{

    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionButtonClickEventHandler
    public void WebGridRedo(object sender, PropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        //TODO

        var grid = CodeGenHelper.GetDescription<WebGrid>("content");
        this.grid.endEdit(true);
        this.grid.transactions.redo();


        Console.WriteLine("test");
    }
    //end eventHandler
}