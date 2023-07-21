//begin imports

//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class PivotDataFlatAggregateMaxSale {
    //begin eventHandler
    public pivotDataFlatAggregateMaxSale(members: any[], data: any[]): any {
        let max = 0;
        if (data.length === 1) {
            max = data[0].ProductUnitPrice * data[0].NumberOfUnits;
        } else if (data.length > 1) {
            const mappedData = data.map(x => x.ProductUnitPrice * x.NumberOfUnits);
            max = mappedData.reduce((a, b) => Math.max(a, b));
        }
        return max;
    }
    //end eventHandler
}