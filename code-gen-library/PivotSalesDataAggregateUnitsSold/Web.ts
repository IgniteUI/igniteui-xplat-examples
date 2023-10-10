//begin imports

//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class PivotSalesDataAggregateUnitsSold {
    //begin eventHandler
    public pivotSalesDataAggregateUnitsSold(members: any[], data: any[]): any {
        return data.reduce((accumulator, item) => accumulator + (item.UnitsSold * item.SalePrice), 0);
    }
    //end eventHandler
}