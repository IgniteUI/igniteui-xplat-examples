//begin imports
import 'package:igniteui_flutter_charts/src/igf-assigning-category-style-event-args.dart' show IgfAssigningCategoryStyleEventArgsState;
import 'package:igniteui_flutter_core/src/IgfBrush.dart' show IgfSolidColorBrush;
//end imports

class TestsAssignStyleToNegativeShapes
{
//begin eventHandler
    void testsAssignStyleToNegativeShapes(Object? sender, IgfAssigningCategoryStyleEventArgsState args) {
        if (args.selectionHighlightingInfo != null && args.isNegativeShape == true) {
            args.fill = IgfSolidColorBrush.fromString("blue");
            args.stroke = IgfSolidColorBrush.fromString("black");
            args.highlightingHandled = true;
        }
    }
//end eventHandler
}
