//begin imports
import 'package:igniteui_flutter_charts/src/igf-slice-click-event-args.dart' show IgfSliceClickEventArgsState;
//end imports

class DoughnutChartExplosionSliceClick {
    //begin eventHandler
    void doughnutChartExplosionSliceClick(Object? sender, IgfSliceClickEventArgsState args) {
        args.isExploded = !args.isExploded;
    }
    //end eventHandler
}
