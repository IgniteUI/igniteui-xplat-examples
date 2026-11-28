//begin imports
//end imports

//begin data
@objcMembers
public class CompanyIncomeStatementItem: NSObject, ISampleDataItem {
    public var date: String? = nil
    public var revenue: Double = 0.0
    public var expenses: Double = 0.0
    public var income: Double = 0.0
    public var incomePerRevenue: Double = 0.0
    public var revenueX: Double = 0.0
    public var expensesX: Double = 0.0
    public var formattedRevenue: String? = nil
    public var formattedExpenses: String? = nil
    public var formattedIncome: String? = nil
    public var formattedProfit: String? = nil
}

public class CompanyIncomeStatement: ArrayList<CompanyIncomeStatementItem?> {
    public init() {
        super.init()
        // Quarterly revenue and expenses in thousands, which is how the statement reports them.
        let reported: [[Double]] = [
            [16914, 10183], [15077, 12813], [16886, 14476], [17652, 11705], [21082, 14044],
            [17737, 12803], [18687, 13677], [21470, 13717], [28072, 17133]
        ]
        let dates = [
            "Jan 1, 2019", "Mar 1, 2019", "Jun 1, 2019", "Sep 1, 2019",
            "Jan 1, 2020", "Mar 1, 2020", "Jun 1, 2020", "Sep 1, 2020",
            "Jan 1, 2021"
        ]
        for i in 0..<reported.count {
            let item = CompanyIncomeStatementItem()
            item.date = dates[i]
            item.revenue = reported[i][0] * 1000
            item.expenses = reported[i][1] * 1000
            item.income = item.revenue - item.expenses
            item.incomePerRevenue = (item.income / item.revenue) * 100
            // Where each callout sits along the category axis: its category. A callout targeting a
            // series is moved by that series' own offset, which for clustered columns is the centre
            // of its column within the category, so both callouts take the plain category index.
            item.revenueX = Double(i)
            item.expensesX = Double(i)
            item.formattedRevenue = "$" + CompanyIncomeStatement.abbreviate(item.revenue)
            item.formattedExpenses = "$" + CompanyIncomeStatement.abbreviate(item.expenses)
            item.formattedIncome = "$" + CompanyIncomeStatement.abbreviate(item.income)
            item.formattedProfit = CompanyIncomeStatement.numberText(item.incomePerRevenue) + "%"
            self.add(item: item)
        }
    }

    public required init(arrayLiteral: CompanyIncomeStatementItem?...) {
        super.init(array: arrayLiteral)
    }

    // Callout labels have room for a few characters, so millions and thousands are abbreviated
    // and anything smaller keeps its thousands separators.
    private static func abbreviate(_ value: Double) -> String {
        let posix = Locale(identifier: "en_US_POSIX")
        if value >= 1000000 {
            return String(format: "%.1f", locale: posix, value / 1000000.0) + "M"
        }
        if value >= 1000 {
            return String(format: "%.1f", locale: posix, value / 1000.0) + "K"
        }
        let formatter = NumberFormatter()
        formatter.locale = posix
        formatter.numberStyle = .decimal
        formatter.usesGroupingSeparator = true
        formatter.groupingSeparator = ","
        formatter.groupingSize = 3
        formatter.maximumFractionDigits = 0
        return formatter.string(from: NSNumber(value: value)) ?? String(value)
    }

    // The shortest text that reads back as the same value, without a fraction for whole numbers,
    // as the other platforms print a double.
    private static func numberText(_ value: Double) -> String {
        if value.rounded() == value && abs(value) < 1e15 {
            return String(Int64(value))
        }
        return String(value)
    }
}
//end data
