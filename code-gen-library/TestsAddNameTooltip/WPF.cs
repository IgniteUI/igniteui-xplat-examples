//begin imports
using Infragistics.Controls.Charts;
//end imports

public class TestsAddNameTooltip
{

    //begin eventHandler
	//WPF: System.Action
    public  void TestsAddNameTooltip(){
        var chart = CodeGenHelper.GetDescription<XamDataChart>("content");
        foreach(var series in chart.Series)
        {
            if (!series.IsLayer)
			{
				var textBlock = new TextBlock();
				textBlock.SetBinding(TextBlock.TextProperty,
					 new Binding()
					 {
						 Path = new PropertyPath("Item[Name]")
					 });
				series.ToolTip = textBlock;
			}
        }
    }
    //end eventHandler

}