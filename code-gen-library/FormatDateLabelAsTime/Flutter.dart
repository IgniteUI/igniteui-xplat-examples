//begin imports
//end imports

class FormatDateLabelAsTime
{
//begin eventHandler
    //Flutter: Object?___String?
    String? formatDateLabelAsTime(Object? sender, Object? item) {
        var d = toDate(item);
        if (d == null) {
            return item?.toString();
        }
        return pad2(d.hour) + ":" + pad2(d.minute) + ":" + pad2(d.second);
    }

    DateTime? toDate(Object? item) {
        if (item is DateTime) {
            return item;
        }
        if (item is Map) {
            var dateValue = item["Date"];
            if (dateValue is DateTime) {
                return dateValue;
            }
            if (dateValue is num) {
                return ticksToDate(dateValue);
            }
            return null;
        }
        if (item is num) {
            return ticksToDate(item);
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
