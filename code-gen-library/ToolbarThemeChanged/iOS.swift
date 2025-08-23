//begin imports
//end imports

class ToolbarThemeChanged {

    //begin eventHandler
    func toolbarThemeChanged(sender: Any?, e: IgsToolCommandEventArgs) {
        let target = CodeGenHelper.getDescription(IgsDataChart.self, "content")

        switch e.command.commandId {
        case "EnableTooltips":
            var toRemove: IgsSeries? = nil
            for s in target.series {
                if s is IgsDataToolTipLayer {
                    toRemove = s as? IgsSeries
                }
            }

            if toRemove == nil {
                target.series.append(IgsDataToolTipLayer())
            } else {
                if let index = target.series.firstIndex(where: { $0 === toRemove }) {
                    target.series.remove(at: index)
                }
            }
        default:
            break
        }
    }
    //end eventHandler

}
