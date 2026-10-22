//begin imports
import 'package:igniteui_flutter_layouts/src/igf-tool-command-event-args.dart' show IgfToolCommandEventArgsState;
import 'package:igniteui_flutter_charts/src/igf-data-chart.dart' show IgfDataChartState;
import 'package:igniteui_flutter_charts/src/igf-series.dart' show IgfSeriesState;
import 'package:igniteui_flutter_charts/src/igf-data-tool-tip-layer.dart' show IgfDataToolTipLayerState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

class ToolbarThemeChanged
{
//begin eventHandler
    void toolbarThemeChanged(Object? sender, IgfToolCommandEventArgsState e) {
        var target = CodeGenHelper.getDescription<IgfDataChartState>("content")!;
        var series = target.series!;

        switch (e.command!.commandId) {
            case "EnableTooltips":
                IgfSeriesState? toRemove = null;
                for (var i = 0; i < series.count; i++) {
                    var s = series[i];
                    if (s is IgfDataToolTipLayerState) {
                        toRemove = s;
                    }
                }

                if (toRemove == null) {
                    series.add(IgfDataToolTipLayerState());
                } else {
                    series.remove(toRemove);
                }
                break;
        }
    }
//end eventHandler
}
