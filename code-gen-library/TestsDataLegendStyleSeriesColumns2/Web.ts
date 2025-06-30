//begin imports
import { DataLegendStylingColumnEventArgs } from 'igniteui-webcomponents-charts';
import { Brush } from 'igniteui-webcomponents-core';
//end imports

export class TestsDataLegendStyleSeriesColumns2
{
    //begin eventHandler
    public testsDataLegendStyleSeriesColumns2(sender:any,args: DataLegendStylingColumnEventArgs)
    { 
        let g = new Brush(); g.fill = "Green";
        let b = new Brush(); b.fill = "Blue";
        let r = new Brush(); r.fill = "Red";
        let c = new Brush(); c.fill = "Cyan";
        let bl = new Brush(); bl.fill = "Black"; 
        let br = new Brush(); br.fill = "Brown"; 
        let p = new Brush(); p.fill = "Purple"; 
        let o = new Brush(); o.fill = "Orange"; 
        switch (args.seriesTitle)
        {
 		 case "Financial1":
		 case "F1":
               switch (args.valueMemberPath)
               {
                   case "Open":  
                   case "[Open]":
                       args.labelText = "Open";
                       args.labelTextColor = c;
                       args.unitsText = "$";
                       args.unitsTextColor = bl;
                       args.valueTextColor = g;
                       break;
                   case "Close":
		            case "[Close]":
                       args.labelText = "Close";
                       args.labelTextColor = g;
                       args.unitsText = "$";
                       args.unitsTextColor = r;
                       args.valueTextColor = c;
                       break;
                   case "TypicalPrice":
		           case "[TypicalPrice]":
		           case "TP":
                       args.labelText = "Typical";
                       args.labelTextColor = b;
                       args.unitsText = "$";
                       args.unitsTextColor = g;
                       args.valueTextColor = b;
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
                       args.labelTextColor = g;
                       args.unitsText = "$";
                       args.unitsTextColor = br;
                       args.valueTextColor = c;
                       break;
                   case "Close":
		           case "[Close]":
                       args.labelText = "Close";
                       args.labelTextColor = c;
                       args.unitsText = "$";
                       args.unitsTextColor = r;
                       args.valueTextColor = g;
                       break;
                   case "TypicalPrice":
		            case "[TypicalPrice]":
			        case "TP":
                       args.labelText = "Typical";
                       args.labelTextColor = b;
                       args.unitsText = "$";
                       args.unitsTextColor = p;
                       args.valueTextColor = o;
                       break;
               }
       break;
 		 
}
    }
    //end eventHandler
}