//begin imports
//end imports

class ToolbarToggleAnnotations {

    //begin eventHandler
    func toolbarToggleAnnotations(sender: Any?, e: IgsToolCommandEventArgs?) {
        let toolbar = sender as! IgsToolbar
        let target = toolbar.target as! IgsDataChart
        var enable = false

        switch e.command.commandId {
        case "EnableTooltips":
            enable = e.command.argumentsList[0].value as! Bool
            if enable {
                target.series.append(IgsDataToolTipLayer())
            } else {
                if let toRemove = target.series.first(where: { $0 is IgsDataToolTipLayer }) {
                    if let index = target.series.firstIndex(where: { $0 === toRemove }) {
                        target.series.remove(at: index)
                    }
                }
            }

        case "EnableCrosshairs":
            enable = e.command.argumentsList[0].value as! Bool
            if enable {
                target.series.append(IgsCrosshairLayer())
            } else {
                if let toRemove = target.series.first(where: { $0 is IgsCrosshairLayer }) {
                    if let index = target.series.firstIndex(where: { $0 === toRemove }) {
                        target.series.remove(at: index)
                    }
                }
            }

        case "EnableFinalValues":
            enable = e.command.argumentsList[0].value as! Bool
            if enable {
                target.series.append(IgsFinalValueLayer())
            } else {
                if let toRemove = target.series.first(where: { $0 is IgsFinalValueLayer }) {
                    if let index = target.series.firstIndex(where: { $0 === toRemove }) {
                        target.series.remove(at: index)
                    }
                }
            }

        default:
            break
        }
    }
    //end eventHandler

}
