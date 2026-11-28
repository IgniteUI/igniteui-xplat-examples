//begin template
//begin imports
import UIKit;
//end imports

public class DataChartProductionTooltipTemplate {
    //begin content
    // A tooltip here is not a template but content the series asks for each time it shows one: it hands
    // back the view it was given last time, to fill with the hovered item.
    public let DataChartProductionTooltipTemplate: @convention(block) (Any?, ChartToolTipUpdatingEventArgs?) -> Void = { sender, args in
        // Whole values print without a fraction, as the other platforms print a double.
        func formatNumber(_ value: Double) -> String {
            if value.rounded() == value && abs(value) < 1e15 {
                return String(Int64(value))
            }
            return String(value)
        }
        guard let args = args, let item = args.currentData?.item as? EnergyProductionByCountryItem else { return }
        var label = args.currentView as? UILabel
        if label == nil {
            label = UILabel()
            label!.numberOfLines = 0
            args.currentView = label
        }
        // Every fuel is listed whichever column is hovered, so the reader sees the country's whole mix.
        // Which series is hovered is carried by the title, drawn in that series' own brush.
        let title = (item.Country ?? "") + " Production"
        var body = title
        body += "\nCoal: " + formatNumber(item.Coal)
        body += "\nHydro: " + formatNumber(item.Hydro)
        body += "\nNuclear: " + formatNumber(item.Nuclear)
        body += "\nGas: " + formatNumber(item.Gas)
        body += "\nOil: " + formatNumber(item.Oil)
        let text = NSMutableAttributedString(string: body)
        let titleRange = NSRange(location: 0, length: (title as NSString).length)
        text.addAttribute(.font, value: UIFont.boldSystemFont(ofSize: label!.font.pointSize), range: titleRange)
        if let brush = (sender as? IgsSeries)?.actualBrush as? IgsSolidColorBrush {
            text.addAttribute(.foregroundColor, value: brush.color, range: titleRange)
        }
        label!.attributedText = text
    }
    //end content
}
//end template
