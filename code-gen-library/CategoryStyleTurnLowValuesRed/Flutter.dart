//begin imports
import 'package:igniteui_flutter_charts/src/igf-assigning-category-style-event-args.dart' show IgfAssigningCategoryStyleEventArgsState;
import 'package:igniteui_flutter_charts/src/igf-series.dart' show IgfSeriesState;
import 'package:igniteui_flutter_core/src/IgfBrush.dart' show IgfSolidColorBrush;
//end imports

class CategoryStyleTurnLowValuesRed
{
//begin eventHandler
    void categoryStyleTurnLowValuesRed(Object? sender, IgfAssigningCategoryStyleEventArgsState args) {
        var series = sender as IgfSeriesState;
        var items = args.getItems!(args.startIndex, args.endIndex);
        if (items == null) {
            return;
        }
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var value = series.getItemValue(item, "valueMemberPath") as double;
            if (value < 60) {
                args.fill = IgfSolidColorBrush.fromString("red");
            }
        }
    }
//end eventHandler
}
