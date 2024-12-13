//begin imports
import { IgxDashboardTileComponent } from 'igniteui-angular-dashboards';
//end imports

import { CodeGenHelper } from 'igniteui-angular-core';

export class DashboardTileGaugeOnInit {

    //begin eventHandler
    public dashboardTileGaugeOnInit(): void {   

        var target = CodeGenHelper.getDescription<IgxDashboardTileComponent>("content");
     
        target.dataSource = 40;
    }
    //end eventHandler

}