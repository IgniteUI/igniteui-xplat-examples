//begin imports
import { IgcDataChartComponent } from 'igniteui-webcomponents-charts';
//end imports

export class TestsAddNameTooltip
{

    //begin eventHandler
    public  testsAddNameTooltip(){
		var chart = CodeGenHelper.getDescription<IgcDataChartComponent>("content");
   //     foreach(var series in chart.Series)
   //     {
   //         if (!series.IsLayer)
			//{
			//	var textBlock = new TextBlock();
			//	textBlock.SetBinding(TextBlock.TextProperty,
			//		 new Binding()
			//		 {
			//			 Path = new PropertyPath("Item[Name]")
			//		 });
			//	series.ToolTip = textBlock;
			//}
   //     }
    }
    //end eventHandler

}