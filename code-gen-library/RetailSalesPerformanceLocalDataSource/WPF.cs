//begin imports
using IgniteUI.Blazor.Controls;
using System;
using System.Collections.Generic;
using System.Collections;
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

public class RetailSalesPerformanceLocalDataSource : LocalDataSource
{
	public RetailSalesPerformanceLocalDataSource(){
		this.DataSource = CodeGenHelper.FindByName<IList>("RetailSalesPerformanceData"); 
	}
	
}

 

//end data
