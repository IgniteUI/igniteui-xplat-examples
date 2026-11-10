//begin imports
import 'package:igniteui_flutter_charts/src/igf-data-legend.dart' show IgfDataLegendState;
import 'package:igniteui_flutter_core/src/igf-date-time-format-specifier.dart' show IgfDateTimeFormatSpecifierState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

class TestsAddDataLegendHeaderSimpleFormatSpecfierShort
{
//begin eventHandler
//Flutter: Action
    void testsAddDataLegendHeaderSimpleFormatSpecfierShort() {
        var legend = CodeGenHelper.getDescription<IgfDataLegendState>("secondary");
        var spec1 = IgfDateTimeFormatSpecifierState();
        spec1.locale = "en-US";
        spec1.dateStyle = "short";

        if (legend != null) {
            legend.headerFormatSpecifiers = <Object?>[spec1];
        }
    }
//end eventHandler
}
