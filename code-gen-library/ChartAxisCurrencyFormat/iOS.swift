//begin imports
//end imports

public class ChartAxisCurrencyFormat {
    //begin eventHandler
    private var axisCurrencyFormat: NumberFormatter? = nil

    public func chartAxisCurrencyFormat(sender: Any?, item: Any?) -> String? {
        if axisCurrencyFormat == nil {
            axisCurrencyFormat = NumberFormatter()
            axisCurrencyFormat?.numberStyle = .currency
            axisCurrencyFormat?.locale = Locale(identifier: "en_US")
        }
        guard let item = item else { return nil }
        if let number = item as? NSNumber {
            return axisCurrencyFormat?.string(from: number)
        }
        return nil
    }
    //end eventHandler
}
