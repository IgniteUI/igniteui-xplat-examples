//begin imports
import 'package:igniteui_flutter_charts/src/igf-slice-click-event-args.dart' show IgfSliceClickEventArgsState;
//end imports

class PieChartExplosionSliceClick {
    //begin eventHandler
    void pieChartExplosionSliceClick(Object? sender, IgfSliceClickEventArgsState args) {
        args.isExploded = !args.isExploded;
        args.isSelected = false;
    }
    //end eventHandler
}
