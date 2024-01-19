//begin imports
using Infragistics.Controls;
using Infragistics.Controls.Layouts;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
//end imports
	
public class PropertyEditorInitAggregationsOnViewInit
{
	
	//begin eventHandler
	public void PropertyEditorInitAggregationsOnViewInit()
	{
		var editor = CodeGenHelper.GetDescription<XamPropertyEditorPanel>("editor");
        var initialSummaries = editor.properties.filter((p) => p.Label == "Initial Summaries")[0];
        initialSummaries.DropDownNames = ["Sum(Sales) as Sales", "Avg(Sales) as Sales", "Min(Sales) as Sales", "Max(Sales) as Sales", "Count(Sales) as Sales" ];
        initialSummaries.DropDownValues = ["Sum(Sales) as Sales", "Avg(Sales) as Sales", "Min(Sales) as Sales", "Max(Sales) as Sales", "Count(Sales) as Sales"];
	}
    //end eventHandler
}