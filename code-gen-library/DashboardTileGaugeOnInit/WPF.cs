//begin imports
using Infragistics.Controls.Dashboards;
//end imports

public class DashboardTileGaugeOnInit
{
    //begin eventHandler
    public void DashboardTileGaugeOnInit()
	{
		CodeGenHelper.GetDescription<XamDashboardTile>("content").ItemsSource = 40;
	}
    //end eventHandler
}