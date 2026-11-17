//begin imports
import 'package:igniteui_flutter_charts/src/igf-slice-click-event-args.dart' show IgfSliceClickEventArgsState;
//end imports

class PieChartSelectionSliceClick {
    //begin eventHandler
    void pieChartSelectionSliceClick(Object? sender, IgfSliceClickEventArgsState args) {
        args.isExploded = !args.isExploded;
        args.isSelected = true;
    }
    //end eventHandler
}
