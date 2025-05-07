//begin imports
import {LocalDataSource} from "igniteui-webcomponents-core";
import { CodeGenHelper } from 'igniteui-webcomponents-core';
//end imports

//begin data
export class RetailSalesPerformanceLocalDataSource extends LocalDataSource
{
    

    public constructor() {
        super();
		this.dataSource  = CodeGenHelper.findByName<any[]>("retailSalesPerformanceData");
       
    }


}

//end data