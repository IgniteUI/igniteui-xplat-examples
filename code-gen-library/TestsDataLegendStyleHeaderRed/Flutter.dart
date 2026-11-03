//begin imports
import 'package:igniteui_flutter_charts/src/igf-data-legend-styling-row-event-args.dart' show IgfDataLegendStylingRowEventArgsState;
import 'package:igniteui_flutter_core/src/IgfBrush.dart' show IgfSolidColorBrush;
//end imports

class TestsDataLegendStyleHeaderRed
{
//begin eventHandler
    void testsDataLegendStyleHeaderRed(Object? sender, IgfDataLegendStylingRowEventArgsState args) {
        args.titleTextColor = IgfSolidColorBrush.fromString("red");
    }
//end eventHandler
}
