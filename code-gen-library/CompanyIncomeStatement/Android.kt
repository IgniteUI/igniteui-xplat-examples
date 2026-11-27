//begin data
import java.util.Locale
import com.infragistics.mobile.controls.IgaDataPropertyOrder

@IgaDataPropertyOrder("Date", "Revenue", "Expenses", "Income", "IncomePerRevenue",
    "RevenueX", "ExpensesX", "FormattedRevenue", "FormattedExpenses", "FormattedIncome", "FormattedProfit")
public class CompanyIncomeStatementItem {
    var Date: String = ""
    var Revenue: Double = 0.0
    var Expenses: Double = 0.0
    var Income: Double = 0.0
    var IncomePerRevenue: Double = 0.0
    var RevenueX: Double = 0.0
    var ExpensesX: Double = 0.0
    var FormattedRevenue: String = ""
    var FormattedExpenses: String = ""
    var FormattedIncome: String = ""
    var FormattedProfit: String = ""
}

public class CompanyIncomeStatement : ArrayList<CompanyIncomeStatementItem>() {
    init {
        // Reported quarterly revenue and expenses are in thousands.
        val reported = arrayOf(
            doubleArrayOf(16914.0, 10183.0), doubleArrayOf(15077.0, 12813.0),
            doubleArrayOf(16886.0, 14476.0), doubleArrayOf(17652.0, 11705.0),
            doubleArrayOf(21082.0, 14044.0), doubleArrayOf(17737.0, 12803.0),
            doubleArrayOf(18687.0, 13677.0), doubleArrayOf(21470.0, 13717.0),
            doubleArrayOf(28072.0, 17133.0))
        val dates = arrayOf("Jan 1, 2019", "Mar 1, 2019", "Jun 1, 2019", "Sep 1, 2019",
            "Jan 1, 2020", "Mar 1, 2020", "Jun 1, 2020", "Sep 1, 2020", "Jan 1, 2021")
        for (i in reported.indices) {
            val item = CompanyIncomeStatementItem()
            item.Date = dates[i]
            item.Revenue = reported[i][0] * 1000
            item.Expenses = reported[i][1] * 1000
            item.Income = item.Revenue - item.Expenses
            item.IncomePerRevenue = item.Income / item.Revenue * 100
            item.RevenueX = i.toDouble()
            item.ExpensesX = i.toDouble()
            item.FormattedRevenue = "$" + abbreviate(item.Revenue)
            item.FormattedExpenses = "$" + abbreviate(item.Expenses)
            item.FormattedIncome = "$" + abbreviate(item.Income)
            item.FormattedProfit = item.IncomePerRevenue.toString() + "%"
            add(item)
        }
    }

    private fun abbreviate(value: Double): String = when {
        value >= 1000000 -> String.format(Locale.US, "%.1fM", value / 1000000)
        value >= 1000 -> String.format(Locale.US, "%.1fK", value / 1000)
        else -> String.format(Locale.US, "%,.0f", value)
    }
}
//end data
