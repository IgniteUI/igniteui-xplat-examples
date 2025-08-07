//begin imports
import { IgcDataLegendStylingColumnEventArgs } from 'igniteui-webcomponents-charts';

//end imports

export class TestsDataLegendStyleSeriesColumns2
{
    //begin eventHandler
    public testsDataLegendStyleSeriesColumns2(sender:any,args: IgcDataLegendStylingColumnEventArgs)
    { 
        switch (args.seriesTitle)
        {
 		 case "Financial1":
		 case "F1":
               switch (args.valueMemberPath)
               {
                   case "Open":  
                   case "[Open]":
                       args.labelText = "Open";
                       args.labelTextColor = "cyan";
                       args.unitsText = "$";
                       args.unitsTextColor =  "black";
                       args.valueTextColor = "green";
                       break;
                   case "Close":
		            case "[Close]":
                       args.labelText = "Close";
                       args.labelTextColor = "green";
                       args.unitsText = "$";
                       args.unitsTextColor = "red";
                       args.valueTextColor = "cyan";
                       break;
                   case "TypicalPrice":
		           case "[TypicalPrice]":
		           case "TP":
                       args.labelText = "Typical";
                       args.labelTextColor = "blue";
                       args.unitsText = "$";
                       args.unitsTextColor = "green";
                       args.valueTextColor = "blue";
                       break;
               }
    			 break;
 		 case "Financial2":
		  case "F2":
               switch (args.valueMemberPath)
               {
                   case "Open":
		           case "[Open]":
                       args.labelText = "Open";
                       args.labelTextColor = "green";
                       args.unitsText = "$";
                       args.unitsTextColor = "brown"; 
                       args.valueTextColor = "cyan";
                       break;
                   case "Close":
		           case "[Close]":
                       args.labelText = "Close";
                       args.labelTextColor = "cyan";
                       args.unitsText = "$";
                       args.unitsTextColor = "red";
                       args.valueTextColor = "green";
                       break;
                   case "TypicalPrice":
		            case "[TypicalPrice]":
			        case "TP":
                       args.labelText = "Typical";
                       args.labelTextColor = "blue";
                       args.unitsText = "$";
                       args.unitsTextColor = "purple";
                       args.valueTextColor = "orange";
                       break;
               }
       break;
 		 
}
    }
    //end eventHandler
}