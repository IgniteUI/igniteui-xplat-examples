//begin imports
import android.os.Handler;
import android.os.Looper;
import com.infragistics.mobile.controls.IgaCategoryChart;
import com.infragistics.mobile.controls.IgaDataChart;
import com.infragistics.mobile.controls.IgaChartSelection;
import com.infragistics.mobile.controls.IgaSeriesMatcher;
//end imports

import com.infragistics.mobile.controls.CodeGenHelper;

public class SelectionMatcherOnViewInit
{

	//begin eventHandler
	//Kotlin: Action
    public fun selectionMatcherOnViewInit() {
        
		// Shared by the category chart and data chart samples, which bind the same data.
		val content = CodeGenHelper.getDescription<Any>("content")!!;
		val selectedItems = if (content is IgaCategoryChart) content.selectedSeriesItems!! else (content as IgaDataChart).selectedSeriesItems!!;
		val handler = Handler(Looper.getMainLooper())

		handler.postDelayed({
			var data = CodeGenHelper.findByName<Array<Any?>>("energyRenewableConsumption")!!;
			var matcher: IgaSeriesMatcher = IgaSeriesMatcher();

			var selection: IgaChartSelection = IgaChartSelection();
			selection.item = data[1];
			matcher.memberPath = "hydro";
			matcher.memberPathType = "ValueMemberPath";
			selection.matcher = matcher;
			selectedItems.add(selection);

			var matcher2: IgaSeriesMatcher = IgaSeriesMatcher();
			var selection2: IgaChartSelection = IgaChartSelection();
			selection2.item = data[2];
			matcher2.memberPath = "wind";
			matcher2.memberPathType = "ValueMemberPath";
			selection2.matcher = matcher2;

			selectedItems.add(selection2);
        }, 100);
    }
    //end eventHandler

}