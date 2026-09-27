//begin imports
import 'package:igniteui_flutter_charts/src/igf-data-legend.dart' show IgfDataLegendState;
import 'package:igniteui_flutter_core/src/igf-date-time-format-specifier.dart' show IgfDateTimeFormatSpecifierState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

class TestsAddDataLegendHeaderFormatSpecfierTimeShort
{
//begin eventHandler
    void testsAddDataLegendHeaderFormatSpecfierTimeShort() {
        var legend = CodeGenHelper.getDescription<IgfDataLegendState>("secondary")!;
        var spec = IgfDateTimeFormatSpecifierState();
        spec.locale = "en-US";
        spec.timeStyle = "short";
        legend.headerFormatSpecifiers = <Object?>[spec];
    }
//end eventHandler
}
