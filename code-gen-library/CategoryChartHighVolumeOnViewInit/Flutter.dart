//begin imports
import 'package:igniteui_flutter_charts/src/igf-category-chart.dart' show IgfCategoryChartState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
import 'package:igniteui_flutter_library/CategoryChartVolumeData.dart' show CategoryChartVolumeData;
//end imports

class CategoryChartHighVolumeOnViewInit {
    //begin eventHandler
    //Flutter: Action
    void categoryChartHighVolumeOnViewInit() {
        CodeGenHelper.getDescription<IgfCategoryChartState>('content')!.dataSource = CategoryChartVolumeData.generate(CategoryChartVolumeData.count);
    }
    //end eventHandler
}
