//begin imports
import 'package:intl/intl.dart';
//end imports

class ChartAxisCurrencyFormat
{
//begin eventHandler
    NumberFormat? axisCurrencyFormat;
    //Flutter: Object?___String?
    String? chartAxisCurrencyFormat(Object? sender, Object? item) {
        axisCurrencyFormat ??= NumberFormat.currency(locale: "en_US", symbol: "\$");
        if (item == null) {
            return null;
        }
        if (item is num) {
            return axisCurrencyFormat!.format(item);
        }
        return null;
    }
//end eventHandler
}
