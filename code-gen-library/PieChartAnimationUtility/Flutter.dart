//begin imports
import 'dart:async';
import 'package:igniteui_flutter_core/src/GlobalAnimationState.dart';
import 'package:igniteui_flutter_charts/src/igf-pie-chart.dart' show IgfPieChartState;
//end imports

//begin supportingTypes
class PieChartAnimation {
    static Timer? _timer;
    static GlobalAnimationState? _animationState;
    static bool get running => _timer != null;

    static void toggle(IgfPieChartState chart) {
        if (running) {
            stop();
        } else {
            start(chart);
        }
    }

    static void start(IgfPieChartState chart) {
        stop();
        chart.startAngle = 0;
        chart.radiusFactor = 0.1;
        _animationState = GlobalAnimationState.instance!;
        _animationState!.notifyAnimationStart();
        _timer = Timer.periodic(const Duration(milliseconds: 15), (_) {
            if (chart.radiusFactor < 1) {
                chart.radiusFactor = (chart.radiusFactor + 0.0025).clamp(0.1, 1.0).toDouble();
            }
            if (chart.startAngle < 360) chart.startAngle++;
            if (chart.radiusFactor >= 1 && chart.startAngle >= 360) stop();
        });
    }

    static void stop() {
        _timer?.cancel();
        _timer = null;
        _animationState?.notifyAnimationEnd();
        _animationState = null;
    }
}
//end supportingTypes
