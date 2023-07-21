//begin imports

//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class PivotSalesDataAggregateUnitsCost {
    //begin eventHandler
    public pivotSalesDataAggregateUnitsCost(members: any[], data: any[]): any {
        if (!data) {
            return [];
        }
        return data.reduce((accumulator, item) => accumulator + (item.UnitsSold * item.ManufacturingPrice), 0);
    }
    //end eventHandler
}