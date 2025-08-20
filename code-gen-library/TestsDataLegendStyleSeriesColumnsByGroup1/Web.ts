//begin imports
import { IgcDataLegendStylingColumnEventArgs } from "igniteui-webcomponents-charts";

//end imports

public class TestsDataLegendStyleSeriesColumnsByGroup1
{
    //begin eventHandler
	//WPF: Infragistics.Controls.Charts.DataLegendStyleColumnHandler
    public testsDataLegendStyleSeriesColumnsByGroup1(sender: any,args: IgcDataLegendStylingColumnEventArgs)
    {         
        switch (args.groupName)
		{
			case "Group1":			  
				args.labelText = "Value";
				args.labelTextColor = "blue";
				args.valueTextColor = "blue";
				break;
			case "Group2":
				args.labelText = "Value";
				args.labelTextColor = "red";
				args.valueTextColor = "red";
			   break;
				 
		}
    }
    //end eventHandler
}