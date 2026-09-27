//begin imports
import 'package:igniteui_flutter_layouts/src/igf-property-editor-property-description-changed-event-args.dart' show IgfPropertyEditorPropertyDescriptionChangedEventArgsState;
import 'package:igniteui_flutter_charts/src/igf-data-chart.dart' show IgfDataChartState;
import 'package:igniteui_flutter_charts/src/igf-bubble-series.dart' show IgfBubbleSeriesState;
import 'package:igniteui_flutter_charts/src/igf-value-brush-scale.dart' show IgfValueBrushScaleState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

class ScatterBubbleSeriesFillScaleSliderChanged
{
//begin eventHandler
    void scatterBubbleSeriesFillScaleSliderChanged(Object? sender, IgfPropertyEditorPropertyDescriptionChangedEventArgsState args) {
        var chart = CodeGenHelper.getDescription<IgfDataChartState>("content")!;
        var series = chart.series![0] as IgfBubbleSeriesState;

        // fillScale is declared as the IgfBrushScale base; minimumValue/maximumValue
        // are on the value-scale derivative, which is what this sample sets up.
        var fillScale = series.fillScale as IgfValueBrushScaleState;
        var newValue = (args.newValue as num).toDouble();

        if (newValue >= 25000) {
            fillScale.maximumValue = newValue;
        } else {
            fillScale.minimumValue = newValue;
        }
    }
//end eventHandler
}
