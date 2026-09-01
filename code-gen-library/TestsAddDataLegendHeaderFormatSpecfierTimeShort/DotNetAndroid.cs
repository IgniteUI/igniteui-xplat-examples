//begin imports
using Infragistics.Controls;
using Infragistics.Controls.Charts;
//end imports

public class TestsAddDataLegendHeaderFormatSpecfierTimeShort
{

    //begin eventHandler
	//WPF: System.Action
    public  void TestsAddDataLegendHeaderFormatSpecfierTimeShort(){
        var legend = CodeGenHelper.GetDescription<DataLegendView>("secondary");
       legend.HeaderFormatSpecifiers = new object[1] {
			new DateTimeFormatSpecifier()
			{
				Locale = "en-US",
				TimeStyle = "short"
			}
		};
    }
    //end eventHandler

}