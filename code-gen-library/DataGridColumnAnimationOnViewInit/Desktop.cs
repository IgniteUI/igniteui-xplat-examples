//begin imports
using Infragistics.Controls.Grids;
//end imports

public class DataGridColumnAnimationOnViewInit
{
    //begin eventHandler
    //WPF: System.Action
    public void DataGridColumnAnimationOnViewInit()
    {
        var grid = CodeGenHelper.GetDescription<XamXGrid>("content");
        grid.ColumnAddingAnimationMode = ColumnShowingAnimationMode.SlideFromLeft;
    }
    //end eventHandler
}
