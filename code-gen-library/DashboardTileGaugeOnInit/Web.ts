//begin imports
import { IgcDashboardTileComponent } from 'igniteui-webcomponents-dashboards';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class DashboardTileGaugeOnInit {

    //begin eventHandler
    public dashboardTileGaugeOnInit(): void {        
        CodeGenHelper.GetDescription<IgcDashboardTileComponent>("content").dataSource = 40;
    }
    //end eventHandler

}