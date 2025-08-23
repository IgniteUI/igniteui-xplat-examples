//begin imports
//end imports

public class ColorEditorToggleSeriesBrush {
    //begin eventHandler
    public func colorEditorToggleSeriesBrush(sender: Any?, args: IgsToolCommandEventArgs) {
        guard let target = CodeGenHelper.getDescription(IgsDataChart.self, "content") else { return }
        guard let color = args.command?.argumentsList?[0]?.value else { return }

        switch args.command?.commandId {
        case "ToggleSeriesBrush":
            if let series = target.series.first as? IgsSeries {
                series.brush = color as? IgsBrush
            }
        default:
            break
        }
    }
    //end eventHandler
}
