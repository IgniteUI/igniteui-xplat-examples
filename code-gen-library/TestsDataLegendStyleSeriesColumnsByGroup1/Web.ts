//begin imports
import { DataLegendStylingColumnEventArgs } from "igniteui-webcomponents-charts";
import { Brush } from "igniteui-webcomponents-core";
//end imports

public class TestsDataLegendStyleSeriesColumnsByGroup1
{
    //begin eventHandler
	//WPF: Infragistics.Controls.Charts.DataLegendStyleColumnHandler
    public testsDataLegendStyleSeriesColumnsByGroup1(sender: any,args: DataLegendStylingColumnEventArgs)
    {         
        switch (args.groupName)
		{
			case "Group1":			  
				args.labelText = "Value";
				let b = new Brush();
				b.fill = "Blue";
				args.labelTextColor = b;
				args.valueTextColor = b;
				break;
			case "Group2":
				args.labelText = "Value";
				let r = new Brush();
				r.fill = "Blue";
				args.labelTextColor = r;
				args.valueTextColor = r;
			   break;
				 
		}
    }
    //end eventHandler
}