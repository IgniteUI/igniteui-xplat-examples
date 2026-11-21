//begin imports
import com.infragistics.mobile.controls.IgaChartSeriesEventArgs
import com.infragistics.mobile.controls.IgaMarkerSeries
//end imports

public class CategoryChartMarkerTemplateSeriesAdded {

    //begin eventHandler
    public fun categoryChartMarkerTemplateSeriesAdded(sender: Any?, args: IgaChartSeriesEventArgs) {
        // A category chart makes a series per column it is given, so there is no series in the
        // definition to hang a marker on. The chart says when it has made one, and this is where each
        // gets its marker: an svg, drawn in place of the built-in shapes. currentColor stands for the
        // series' own colors -- the fill takes the marker brush and the stroke the marker outline.
        val series = args.series as? IgaMarkerSeries
        if (series != null) {
            series.markerTemplateSVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path d=\"M12 1.5l3.1 6.3 6.9 1-5 4.9 1.2 6.9-6.2-3.3-6.2 3.3 1.2-6.9-5-4.9 6.9-1z\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/></svg>"
        }
    }
    //end eventHandler

}
