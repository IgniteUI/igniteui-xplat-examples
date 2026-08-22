//begin imports
using Infragistics.Controls.Charts;
//end imports

public class TestsAddStaticTextTooltip
{

    //begin eventHandler
	//WPF: System.Action
    public  void TestsAddStaticTextTooltip(){
        var chart = CodeGenHelper.GetDescription<XamDataChart>("content");
        foreach (var series in chart.Series)
        {
            if (!series.IsLayer)
            {
                var textBlock = new TextBlock() { Text = "text" };
                series.ToolTip = textBlock;
            }
        }
    }
    //end eventHandler

}