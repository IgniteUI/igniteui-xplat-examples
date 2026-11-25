//begin imports
import 'package:igniteui_flutter_charts/src/igf-category-chart.dart' show IgfCategoryChartState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
import 'package:igniteui_flutter_library/CategoryChartFrequencyData.dart' show CategoryChartFrequency;
//end imports

class CategoryChartHighFrequencyOnViewDestroy {
    //begin eventHandler
    //Flutter: Action
    void categoryChartHighFrequencyOnViewDestroy() {
        CategoryChartFrequency.stop();
    }
    //end eventHandler
}
