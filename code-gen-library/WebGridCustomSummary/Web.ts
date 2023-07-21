//begin imports
import { IgcGridComponent, IgcSummaryResult } from 'igniteui-webcomponents-grids/grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';


//class CustomSummary {
//    operate(data: any[], allData: any[] = [], fieldName?: string): IgcSummaryResult[] {
//        const discontinuedData = allData.filter((rec) => rec['Discontinued']).map(r => r[fieldName]);
//        const result = [];
//        result.push({
//            key: 'products',
//            label: 'Products',
//            summaryResult: data.length
//        });
//        result.push({
//            key: 'total',
//            label: 'Total Items',
//            summaryResult: data.length ? data.reduce((a, b) => +a + +b) : 0
//        });
//        result.push({
//            key: 'discontinued',
//            label: 'Discontinued Products',
//            summaryResult: allData.map(r => r['Discontinued']).filter((rec) => rec).length
//        });
//        result.push({
//            key: 'totalDiscontinued',
//            label: 'Total Discontinued Items',
//            summaryResult: discontinuedData.length ? discontinuedData.reduce((a, b) => +a + +b) : 0
//        });
//        return result;
//    }
//}

export class WebGridCustomSummary {
    //begin eventHandler
    public webGridCustomSummary(args: any): void {
        //if (args.detail.field === "UnitsInStock") {
        //    args.detail.summaries = 1; //TODO CUSTOM SUMMARY - NOT IMPLEMENTED YET(?)
        //}

        //Units in Stock needs to have above "CustomSummary" class assigned to it in constructor. Not sure if this will be possible
        //with current implementation of xplat examples?
    }
    //end eventHandler
}