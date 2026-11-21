//begin imports
import 'package:igniteui_flutter_charts/src/igf-category-chart.dart' show IgfCategoryChartState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
import 'package:igniteui_flutter_library/CategoryChartFrequencyData.dart' show CategoryChartFrequency;
//end imports

class CategoryChartHighFrequencyOnViewInit {
    //begin eventHandler
    //Flutter: Action
    void categoryChartHighFrequencyOnViewInit() {
        final chart = CodeGenHelper.getDescription<IgfCategoryChartState>('content')!;
        CategoryChartFrequency.generate(chart);
        CategoryChartFrequency.restartTimer(chart);
    }
    //end eventHandler
}
