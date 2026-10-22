//begin imports
import 'package:igniteui_flutter_layouts/src/igf-tool-command-event-args.dart' show IgfToolCommandEventArgsState;
import 'package:igniteui_flutter_layouts/src/igf-toolbar.dart' show IgfToolbarState;
import 'package:igniteui_flutter_charts/src/igf-data-chart.dart' show IgfDataChartState;
import 'package:igniteui_flutter_charts/src/igf-series.dart' show IgfSeriesState;
import 'package:igniteui_flutter_charts/src/igf-data-tool-tip-layer.dart' show IgfDataToolTipLayerState;
import 'package:igniteui_flutter_charts/src/igf-crosshair-layer.dart' show IgfCrosshairLayerState;
import 'package:igniteui_flutter_charts/src/igf-final-value-layer.dart' show IgfFinalValueLayerState;
//end imports

class ToolbarToggleAnnotations
{
//begin eventHandler
    void toolbarToggleAnnotations(Object? sender, IgfToolCommandEventArgsState e) {
        var toolbar = sender as IgfToolbarState;
        var target = toolbar.target as IgfDataChartState;
        var series = target.series!;
        var enable = false;

        switch (e.command!.commandId) {
            case "EnableTooltips":
                enable = e.command!.argumentsList![0]!.value as bool;
                if (enable) {
                    series.add(IgfDataToolTipLayerState());
                } else {
                    removeLayer(target, (s) => s is IgfDataToolTipLayerState);
                }
                break;
            case "EnableCrosshairs":
                enable = e.command!.argumentsList![0]!.value as bool;
                if (enable) {
                    series.add(IgfCrosshairLayerState());
                } else {
                    removeLayer(target, (s) => s is IgfCrosshairLayerState);
                }
                break;
            case "EnableFinalValues":
                enable = e.command!.argumentsList![0]!.value as bool;
                if (enable) {
                    series.add(IgfFinalValueLayerState());
                } else {
                    removeLayer(target, (s) => s is IgfFinalValueLayerState);
                }
                break;
        }
    }

    // The three branches differ only in which layer type they look for, so the
    // last-match-wins walk the other platforms repeat inline is factored out here.
    void removeLayer(IgfDataChartState target, bool Function(IgfSeriesState?) matches) {
        var series = target.series!;
        IgfSeriesState? toRemove = null;
        for (var i = 0; i < series.count; i++) {
            if (matches(series[i])) {
                toRemove = series[i];
            }
        }
        if (toRemove != null) {
            series.remove(toRemove);
        }
    }
//end eventHandler
}
