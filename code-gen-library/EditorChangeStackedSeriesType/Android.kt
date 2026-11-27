//begin imports
import com.infragistics.mobile.controls.IgaDataChart
import com.infragistics.mobile.controls.IgaPropertyEditorPropertyDescriptionChangedEventArgs
import com.infragistics.mobile.controls.IgaHorizontalStackedSeriesBase
import com.infragistics.mobile.controls.IgaVerticalStackedSeriesBase
import com.infragistics.mobile.controls.IgaStackedFragmentSeries
import com.infragistics.mobile.controls.IgaCategoryXAxis
import com.infragistics.mobile.controls.IgaCategoryYAxis
import com.infragistics.mobile.controls.IgaNumericXAxis
import com.infragistics.mobile.controls.IgaNumericYAxis
import com.infragistics.mobile.controls.IgaStackedColumnSeries
import com.infragistics.mobile.controls.IgaStacked100ColumnSeries
import com.infragistics.mobile.controls.IgaStackedAreaSeries
import com.infragistics.mobile.controls.IgaStacked100AreaSeries
import com.infragistics.mobile.controls.IgaStackedBarSeries
import com.infragistics.mobile.controls.IgaStacked100BarSeries
import com.infragistics.mobile.controls.IgaStackedLineSeries
import com.infragistics.mobile.controls.IgaStacked100LineSeries
import com.infragistics.mobile.controls.IgaStackedSplineSeries
import com.infragistics.mobile.controls.IgaStacked100SplineSeries
//end imports

public class EditorChangeStackedSeriesType {
    //begin eventHandler
    public fun editorChangeStackedSeriesType(sender: Any?, args: IgaPropertyEditorPropertyDescriptionChangedEventArgs?) {
        val chart = CodeGenHelper.getDescription<IgaDataChart>("content")!!
        val name = args!!.newValue as String
        val stack = when (name) {
            "Stacked Column Series" -> IgaStackedColumnSeries()
            "Stacked 100 Column Series" -> IgaStacked100ColumnSeries()
            "Stacked Area Series" -> IgaStackedAreaSeries()
            "Stacked 100 Area Series" -> IgaStacked100AreaSeries()
            "Stacked Bar Series" -> IgaStackedBarSeries()
            "Stacked 100 Bar Series" -> IgaStacked100BarSeries()
            "Stacked Line Series" -> IgaStackedLineSeries()
            "Stacked 100 Line Series" -> IgaStacked100LineSeries()
            "Stacked Spline Series" -> IgaStackedSplineSeries()
            "Stacked 100 Spline Series" -> IgaStacked100SplineSeries()
            else -> IgaStackedColumnSeries()
        }
        stack.dataSource = chart.series!![0]!!.dataSource
        if (stack is IgaVerticalStackedSeriesBase) {
            stack.xAxis = CodeGenHelper.findByName<IgaNumericXAxis>("numXAxis")
            stack.yAxis = CodeGenHelper.findByName<IgaCategoryYAxis>("catYAxis")
        } else {
            val horizontal = stack as IgaHorizontalStackedSeriesBase
            horizontal.xAxis = CodeGenHelper.findByName<IgaCategoryXAxis>("catXAxis")
            horizontal.yAxis = CodeGenHelper.findByName<IgaNumericYAxis>("numYAxis")
        }
        for (fuel in arrayOf("Coal", "Hydro", "Nuclear", "Gas", "Oil")) {
            val fragment = IgaStackedFragmentSeries()
            fragment.valueMemberPath = fuel
            fragment.title = fuel
            stack.series!!.add(fragment)
        }
        chart.series!!.clear()
        chart.series!!.add(stack)
    }
    //end eventHandler
}
