//begin imports
import 'package:igniteui_flutter_charts/src/igf-data-pie-chart.dart' show IgfDataPieChartState;
import 'package:igniteui_flutter_core/src/igf-number-format-specifier.dart' show IgfNumberFormatSpecifierState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

class TestsAddDataPieNumberFormatter
{
//begin eventHandler
    void testsAddDataPieNumberFormatter() {
        var dataPie = CodeGenHelper.getDescription<IgfDataPieChartState>("content")!;

        var sliceSpec = IgfNumberFormatSpecifierState();
        sliceSpec.locale = "en-US";
        sliceSpec.minimumIntegerDigits = 4;
        sliceSpec.minimumFractionDigits = 2;
        sliceSpec.maximumFractionDigits = 2;
        sliceSpec.useGrouping = false;
        dataPie.sliceLabelFormatSpecifiers = <Object?>[sliceSpec];

        var othersSpec = IgfNumberFormatSpecifierState();
        othersSpec.locale = "en-US";
        othersSpec.minimumIntegerDigits = 4;
        othersSpec.minimumFractionDigits = 2;
        othersSpec.maximumFractionDigits = 2;
        othersSpec.useGrouping = false;
        dataPie.othersSliceLabelFormatSpecifiers = <Object?>[othersSpec];
    }
//end eventHandler
}
