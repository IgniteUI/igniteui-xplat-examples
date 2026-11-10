//begin imports
import 'package:igniteui_flutter_charts/src/igf-data-legend.dart' show IgfDataLegendState;
import 'package:igniteui_flutter_core/src/igf-date-time-format-specifier.dart' show IgfDateTimeFormatSpecifierState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

class TestsAddDataLegendHeaderSimpleFormatSpecfier
{
//begin eventHandler
//Flutter: Action
    void testsAddDataLegendHeaderSimpleFormatSpecfier() {
        var legend = CodeGenHelper.getDescription<IgfDataLegendState>("secondary")!;
        var spec = IgfDateTimeFormatSpecifierState();
        spec.locale = "en-US";
        spec.dateStyle = "long";
        legend.headerFormatSpecifiers = <Object?>[spec];
    }
//end eventHandler
}
