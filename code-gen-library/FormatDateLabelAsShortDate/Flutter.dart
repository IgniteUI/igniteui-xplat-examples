//begin imports
import 'package:igniteui_flutter_core/src/IDictionary\$2.dart' show IDictionary$2;
//end imports

class FormatDateLabelAsShortDate
{
//begin eventHandler
    //Flutter: Object?___String?
    String? formatDateLabelAsShortDate(Object? sender, Object? item) {
        var d = toDate(item);
        if (d == null) {
            return item?.toString();
        }
        var year = d.year.toString().padLeft(4, "0");
        return pad2(d.month) + "/" + pad2(d.day) + "/" + year.substring(year.length - 2);
    }

    DateTime? toDate(Object? item) {
        if (item is DateTime) {
            return item;
        }
        if (item is Map) {
            return fromValue(item["Date"]);
        }
        // What a chart's data row actually is. The axis hands getLabel the item
        // straight out of its items source, and for data that arrived as a
        // dictionary that is the product's own DictionaryDataItem, which is an
        // IDictionary rather than a Dart Map -- so the Map branch above never
        // matched and this fell through to item.toString(). Base.toString()
        // returns the empty string, and an empty label is dropped rather than
        // drawn, so the axis rendered no labels at all. iOS.swift carries the
        // same case for the same reason.
        if (item is IDictionary$2<String?, Object?>) {
            return fromValue(item["Date"]);
        }
        if (item is num) {
            return ticksToDate(item);
        }
        return null;
    }

    DateTime? fromValue(Object? dateValue) {
        if (dateValue is DateTime) {
            return dateValue;
        }
        if (dateValue is num) {
            return ticksToDate(dateValue);
        }
        return null;
    }

    // .NET ticks -- 100ns units since year 1 -- which is what the axis hands over when
    // the column came across the wire as a number.
    DateTime ticksToDate(num ticks) {
        var millis = (ticks / 10000.0).round();
        return DateTime.fromMillisecondsSinceEpoch(millis - 62135596800000, isUtc: false);
    }

    String pad2(int v) {
        return v.toString().padLeft(2, "0");
    }

//end eventHandler
}
