//begin imports
using Infragistics.Win.DataVisualization;
//end imports

public class TestsAddNameTooltip
{

    //begin eventHandler
	//WindowsForms: System.Action
    public  void TestsAddNameTooltip(){
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
		if (panel == null || (panel != null && !panel.Tag.Equals(e.DataContext.Item)))
		{
			panel = new Panel();
			panel.Tag = e.DataContext.Item; // Needed for the above check to work
			panel.Size = new Size(300, 40);
			Label l = new Label() { Text = e.DataContext.Series.Name, Width = 290 };
			panel.Controls.Add(l);
		}
		return panel;
	}
    //end eventHandler

}