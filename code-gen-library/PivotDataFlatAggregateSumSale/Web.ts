//begin imports

//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class PivotDataFlatAggregateSumSale {
    //begin eventHandler
    public pivotDataFlatAggregateSumSale(members: any[], data: any[]): any {
        return data.reduce((accumulator, value) => accumulator + value.ProductUnitPrice * value.NumberOfUnits, 0);
    }
    //end eventHandler
}