//begin imports
using IgniteUI.Blazor.Controls;
using System;
//end imports

public class DashboardTileGaugeOnInit
{
    //begin eventHandler
    public void DashboardTileGaugeOnInit()
	{
		CodeGenHelper.GetDescription<IgbDashboardTile>("content").DataSource = 40;
	}
    //end eventHandler
}