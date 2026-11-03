//begin imports
using IgniteUI.Blazor.Controls;
//end imports

public class DataGridColumnAnimationOnViewInit
{
    //begin eventHandler
    public void DataGridColumnAnimationOnViewInit()
    {
        var grid = CodeGenHelper.GetDescription<IgbDataGrid>("content");
        grid.ColumnAddingAnimationMode = ColumnShowingAnimationMode.SlideFromLeft;
    }
    //end eventHandler
}
