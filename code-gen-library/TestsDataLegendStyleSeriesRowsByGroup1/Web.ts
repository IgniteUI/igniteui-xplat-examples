//begin imports
import { IgcDataLegendStylingRowEventArgs } from 'igniteui-webcomponents-charts';
//end imports

public class TestsDataLegendStyleSeriesRowsByGroup1
{
    //begin eventHandler
	//WPF: Infragistics.Controls.Charts.DataLegendStyleRowHandler
    public testsDataLegendStyleSeriesRowsByGroup1(sender:any,args: IgcDataLegendStylingRowEventArgs)
    {  																	
		 switch (args.groupName)
		 {
			 case "Group1":
				 args.titleTextColor = "blue";
				 break;
			 case "Group2":
				 args.titleTextColor = "red";
				 break;
		 }
    }
    //end eventHandler
}