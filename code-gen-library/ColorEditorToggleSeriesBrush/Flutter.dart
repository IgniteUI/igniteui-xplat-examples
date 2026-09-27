//begin imports
import 'package:igniteui_flutter_layouts/src/igf-tool-command-event-args.dart' show IgfToolCommandEventArgsState;
import 'package:igniteui_flutter_charts/src/igf-data-chart.dart' show IgfDataChartState;
import 'package:igniteui_flutter_core/src/IgfBrush.dart' show IgfBrush;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

class ColorEditorToggleSeriesBrush
{
//begin eventHandler
    void colorEditorToggleSeriesBrush(Object? sender, IgfToolCommandEventArgsState args) {
        var target = CodeGenHelper.getDescription<IgfDataChartState>("content")!;
        var color = args.command!.argumentsList![0]!.value;

        switch (args.command!.commandId!) {
            case "ToggleSeriesBrush":
                var series = target.series![0]!;
                series.brush = color as IgfBrush?;
                break;
        }
    }
//end eventHandler
}
