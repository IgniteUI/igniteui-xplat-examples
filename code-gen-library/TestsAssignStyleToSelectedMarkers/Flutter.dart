//begin imports
import 'package:igniteui_flutter_charts/src/igf-assigning-category-marker-style-event-args.dart' show IgfAssigningCategoryMarkerStyleEventArgsState;
import 'package:igniteui_flutter_core/src/IgfBrush.dart' show IgfSolidColorBrush;
//end imports

class TestsAssignStyleToSelectedMarkers
{
//begin eventHandler
    void testsAssignStyleToSelectedMarkers(Object? sender, IgfAssigningCategoryMarkerStyleEventArgsState args) {
        if (args.selectionHighlightingInfo != null) {
            args.fill = IgfSolidColorBrush.fromString("blue");
            args.stroke = IgfSolidColorBrush.fromString("black");
            args.highlightingHandled = true;
        }
    }
//end eventHandler
}
