//begin imports
import { IgcGridComponent } from 'igniteui-webcomponents-grids/grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class PivotAggregateProductsCost {
    //begin eventHandler
    public pivotAggregateProductsCost(members: any[], data: any[]): any {
        return data.reduce((accumulator, value) => accumulator + (value.SalePrice * value.UnitsSold), 0);
    }
    //end eventHandler
}