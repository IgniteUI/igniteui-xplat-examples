//begin imports
import { DataLegendStylingRowEventArgs } from 'igniteui-webcomponents-charts';
import { Brush } from 'igniteui-webcomponents-core';
//end imports

public class TestsDataLegendStyleSeriesRowsByGroup1
{
    //begin eventHandler
	//WPF: Infragistics.Controls.Charts.DataLegendStyleRowHandler
    public testsDataLegendStyleSeriesRowsByGroup1(sender:any,args: DataLegendStylingRowEventArgs)
    {  																	
		 switch (args.groupName)
		 {
			 case "Group1":
				 let b = new Brush(); b.fill = "Blue";
				 args.titleTextColor = b;
				 break;
			 case "Group2":
				 let r = new Brush(); r.fill = "Red";
				 args.titleTextColor = r;
				 break;
		 }
    }
    //end eventHandler
}