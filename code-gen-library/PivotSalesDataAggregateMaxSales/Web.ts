//begin imports

//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class PivotSalesDataAggregateMaxSales {
    //begin eventHandler
    public pivotSalesDataAggregateMaxSales(members: any[], data: any[]): any[] {
        if (!data) {
            return [];
        }
        return data.map(x => x.Sales).reduce((a, b) => Math.max(a, b));
    }
    //end eventHandler
}