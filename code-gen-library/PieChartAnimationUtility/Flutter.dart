//begin imports
import 'dart:async';
//begin testing
import 'package:igniteui_flutter_core/src/GlobalAnimationState.dart';
//end testing
import 'package:igniteui_flutter_charts/src/igf-pie-chart.dart' show IgfPieChartState;
//end imports

//begin supportingTypes
class PieChartAnimation {
    static Timer? _timer;
    //begin testing
    static GlobalAnimationState? _animationState;
    //end testing
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
        final started = Stopwatch()..start();
        //begin testing
        _animationState = GlobalAnimationState.instance!;
        _animationState!.notifyAnimationStart();
        //end testing
        _timer = Timer.periodic(const Duration(milliseconds: 15), (_) {
            // Preserve the original 360 x 15ms duration even when callbacks run late.
            final progress = (started.elapsedMicroseconds / 5400000).clamp(0.0, 1.0).toDouble();
            chart.radiusFactor = 0.1 + 0.9 * progress;
            chart.startAngle = 360 * progress;
            if (progress >= 1) stop();
        });
    }

    static void stop() {
        _timer?.cancel();
        _timer = null;
        //begin testing
        _animationState?.notifyAnimationEnd();
        _animationState = null;
        //end testing
    }
}
//end supportingTypes
