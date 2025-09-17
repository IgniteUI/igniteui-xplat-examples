//begin imports
using Infragistics.Controls;
using Infragistics.Controls.Charts;
//end imports

public class TestsAddDataPieNumberFormatter
{

    //begin eventHandler
	//WPF: System.Action
    public  void TestsAddDataPieNumberFormatter(){
		

		var dataPie = CodeGenHelper.GetDescription<XamDataPieChart>("content");

		 dataPie.SliceLabelFormatSpecifiers = new object[1] {
			 new NumberFormatSpecifier()
			 {
				 Locale = "en-US",
				 MinimumIntegerDigits = 4,
				 MinimumFractionDigits = 2,
				 MaximumFractionDigits = 2,
				 UseGrouping = false
			 }
		 };
		 dataPie.OthersSliceLabelFormatSpecifiers = new object[1] {
			 new NumberFormatSpecifier()
			 {
				 Locale = "en-US",
				 MinimumIntegerDigits = 4,
				 MinimumFractionDigits = 2,
				 MaximumFractionDigits = 2,
				 UseGrouping = false
			 }
		 };

    }
    //end eventHandler

}