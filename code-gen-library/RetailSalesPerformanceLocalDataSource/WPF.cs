//begin imports
using System;
using System.Collections.Generic;
using System.Collections;
//end imports

public class RetailSalesPerformanceLocalDataSource : LocalDataSource
{
	public RetailSalesPerformanceLocalDataSource(){
		this.DataSource = CodeGenHelper.FindByName<IList>("RetailSalesPerformanceData"); 
	}
	
}

 

//end data
