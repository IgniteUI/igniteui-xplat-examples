//begin imports
import 'dart:math' as math;
import 'package:igniteui_flutter_core/src/reflection.dart' show IReflectableData;
import 'package:igniteui_flutter_core/src/type.dart' show TypeInfo, String_$type, Double_$type;
//end imports

//begin supportingTypes
class CategoryChartVolumeItem implements IReflectableData {
    String label = '';
    double value = 0;
    static final Map<String, TypeInfo?> _types = {
        'Label': String_$type, 'Value': Double_$type
    };
    Map<String, TypeInfo?> get propertyTypes => _types;
    Object? getValue(String? name) {
        switch (name) {
            case 'Label': return label;
            case 'Value': return value;
        }
        return null;
    }
    void setValue(String? name, Object? value) {
        switch (name) {
            case 'Label': label = value as String; break;
            case 'Value': this.value = (value as num).toDouble(); break;
        }
    }
}

abstract class CategoryChartVolumeData {
    static final math.Random _random = math.Random();
    static int count = 500000;

    static List<CategoryChartVolumeItem?> generate(int count, [double startValue = 0]) {
        final result = List<CategoryChartVolumeItem?>.filled(count + 1, null);
        var value = startValue;
        for (var index = 0; index <= count; index++) {
            value += _random.nextDouble() * 4 - 2;
            result[index] = CategoryChartVolumeItem()
                ..label = toShortString(index)
                ..value = value.roundToDouble();
        }
        return result;
    }

    static String toShortString(num value) {
        if (value >= 1000000) return '${_tenths((value / 100000).round())}m';
        if (value >= 1000) return '${_tenths((value / 100).round())}k';
        return value.round().toString();
    }
    static String _tenths(int value) => value % 10 == 0
        ? (value ~/ 10).toString() : (value / 10).toString();
}
//end supportingTypes
