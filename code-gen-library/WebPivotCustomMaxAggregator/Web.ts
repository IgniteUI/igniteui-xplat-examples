//begin imports
import { IgcGridComponent } from 'igniteui-webcomponents-grids/grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebPivotCustomMaxAggregator {
    //begin eventHandler
    public webPivotCustomMaxAggregator(members: any[], data: any[]): any[] {
        if (!data) {
            return [];
        }
        return data.map(x => x.Sales).reduce((a, b) => Math.max(a, b));
    }
    //end eventHandler
}