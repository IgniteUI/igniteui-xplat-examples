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
        //begin testing
        _animationState = GlobalAnimationState.instance!;
        _animationState!.notifyAnimationStart();
        //end testing
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
        //begin testing
        _animationState?.notifyAnimationEnd();
        _animationState = null;
        //end testing
    }
}
//end supportingTypes
