//begin imports
import 'package:igniteui_flutter_charts/src/igf-pie-chart.dart' show IgfPieChartState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
import 'package:igniteui_flutter_library/PieChartAnimationUtility.dart' show PieChartAnimation;
//end imports

class PieChartAnimationOnViewInit {
//begin eventHandler
    void pieChartAnimationOnViewInit() {
        PieChartAnimation.start(CodeGenHelper.getDescription<IgfPieChartState>('content')!);
    }
//end eventHandler
}
