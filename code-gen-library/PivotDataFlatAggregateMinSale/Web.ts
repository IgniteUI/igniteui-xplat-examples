//begin imports

//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class PivotDataFlatAggregateMinSale {
    //begin eventHandler
    public pivotDataFlatAggregateMinSale(members: any[], data: any[]): any {
        let min = 0;
        if (data.length === 1) {
            min = data[0].ProductUnitPrice * data[0].NumberOfUnits;
        } else if (data.length > 1) {
            const mappedData = data.map(x => x.ProductUnitPrice * x.NumberOfUnits);
            min = mappedData.reduce((a, b) => Math.min(a, b));
        }
        return min;
    }
    //end eventHandler
}