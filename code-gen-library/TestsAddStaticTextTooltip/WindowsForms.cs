//begin imports
using Infragistics.Win.DataVisualization;
//end imports

public class TestsAddStaticTextTool
{

    //begin eventHandler
	//WindowsForms: System.Action
    public  void TestsAddStaticTextTooltip(){
		var chart = CodeGenHelper.GetDescription<UltraDataChart>("content");
		//chart.TooltipContentUpdating +=		
		foreach(var series in chart.Series)
		{
			if (!series.IsLayer)
				{
				series.TooltipContentUpdating += Series_TooltipContentUpdating;
				}
		}
	}

	private System.Windows.Forms.Control Series_TooltipContentUpdating(object sender, ChartTooltipContentEventArgs e)
	{
		Panel panel = e.CurrentContent as Panel;
		if (panel == null )
		{
			panel = new Panel();			
			panel.Size = new Size(300, 40);
			Label l = new Label() { Text = "text", Width = 290 };
			panel.Controls.Add(l);
		}
		return panel;
	}
    //end eventHandler

}