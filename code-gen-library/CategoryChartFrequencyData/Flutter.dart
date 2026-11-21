//begin imports
import 'dart:async';
import 'dart:math' as math;
import 'package:igniteui_flutter_charts/src/igf-category-chart.dart' show IgfCategoryChartState;
import 'package:igniteui_flutter_core/src/reflection.dart' show IReflectableData;
import 'package:igniteui_flutter_core/src/type.dart' show TypeInfo, String_$type, Double_$type;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

//begin supportingTypes
class CategoryChartFrequencyItem implements IReflectableData {
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

abstract class CategoryChartFrequency {
    static int points = 100000;
    static int refreshMilliseconds = 10;
    static bool running = false;
    static final math.Random _random = math.Random();
    static IgfCategoryChartState? _chart;
    static List<CategoryChartFrequencyItem?> _data = [];
    static int _index = 0;
    static Timer? _timer;

    static void generate(IgfCategoryChartState target) {
        if (!identical(_chart, target)) {
            stopTimer();
            running = false;
        }
        _chart = target;
        final data = List<CategoryChartFrequencyItem?>.filled(points + 1, null, growable: true);
        var value = 100.0;
        for (var index = 0; index <= points; index++) {
            value += _random.nextDouble() * 4 - 2;
            data[index] = CategoryChartFrequencyItem()
                ..label = index.toString()
                ..value = value.roundToDouble();
        }
        _data = data;
        _index = data.length;
        target.dataSource = data;
    }

    static void toggle() { running = !running; }

    static void restartTimer(IgfCategoryChartState target) {
        stopTimer();
        _chart = target;
        var wasMounted = target.mounted;
        _timer = Timer.periodic(Duration(milliseconds: refreshMilliseconds), (_) {
            // View-init can run before the first Flutter frame mounts the chart.
            // Once mounted, disposing or replacing it releases the timer and its data.
            if (!identical(CodeGenHelper.getDescription<Object>('content'), target) ||
                (wasMounted && !target.mounted)) {
                stopTimer();
                running = false;
                _chart = null;
                _data = [];
                return;
            }
            wasMounted = wasMounted || target.mounted;
            if (!running || _data.isEmpty) return;
            final arrived = CategoryChartFrequencyItem()
                ..label = (++_index).toString()
                ..value = _data.last!.value + _random.nextDouble() * 4 - 2;
            final leaving = _data.first;
            _data.add(arrived);
            target.notifyInsertItem(_data, _data.length - 1, arrived);
            _data.removeAt(0);
            target.notifyRemoveItem(_data, 0, leaving);
        });
    }

    static void stopTimer() {
        _timer?.cancel();
        _timer = null;
    }
}
//end supportingTypes
