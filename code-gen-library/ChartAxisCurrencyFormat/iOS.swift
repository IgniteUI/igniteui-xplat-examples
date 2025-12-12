//begin imports
//end imports

public class ChartAxisCurrencyFormat {
    //begin eventHandler
    private var axisCurrencyFormat: NumberFormatter? = nil

    //Swift: Any?___String?
    public func chartAxisCurrencyFormat(sender: Any?, args: Any?) -> String? {
        if axisCurrencyFormat == nil {
            axisCurrencyFormat = NumberFormatter()
            axisCurrencyFormat?.numberStyle = .currency
            axisCurrencyFormat?.locale = Locale(identifier: "en_US")
        }
        guard let args = args else { return nil }
        if let number = args as? NSNumber {
            return axisCurrencyFormat?.string(from: number)
        }
        return nil
    }
    //end eventHandler
}
