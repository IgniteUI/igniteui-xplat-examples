//begin template
//begin imports
import UIKit;
//end imports

public class CategoryChartTooltipTemplate {
    //begin content
    // A tooltip here is not a template but content the chart asks for each time it shows one: it hands
    // back the view it was given last time, to fill with the hovered item.
    public let CategoryChartTooltipTemplate: @convention(block) (Any?, ChartToolTipUpdatingEventArgs?) -> Void = { sender, args in
        // Whole values print without a fraction, as the other platforms print a double.
        func formatNumber(_ value: Double) -> String {
            if value.rounded() == value && abs(value) < 1e15 {
                return String(Int64(value))
            }
            return String(value)
        }
        guard let args = args, let item = args.currentData?.item as? MovieFranchiseRevenueItem else { return }
        var label = args.currentView as? UILabel
        if label == nil {
            label = UILabel()
            label!.numberOfLines = 0
            args.currentView = label
        }
        let title = "Franchise: " + (item.franchise ?? "")
        let text = NSMutableAttributedString(string: title + "\nRevenue of All Movies: " + formatNumber(item.totalRevenue) +
            "\nHighest Grossing Movie: $" + formatNumber(item.highestGrossing))
        text.addAttribute(.font, value: UIFont.boldSystemFont(ofSize: label!.font.pointSize),
                          range: NSRange(location: 0, length: (title as NSString).length))
        label!.attributedText = text
    }
    //end content
}
//end template
