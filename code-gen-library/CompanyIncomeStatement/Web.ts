//begin imports
//end imports

//begin data
export class CompanyIncomeStatementItem {
    public Date: string;
    public Revenue: number;
    public Expenses: number;
    public Income: number;
    public IncomePerRevenue: number;
    public RevenueX: number;
    public ExpensesX: number;
    public FormattedRevenue: string;
    public FormattedExpenses: string;
    public FormattedIncome: string;
    public FormattedProfit: string;
}

export class CompanyIncomeStatement extends Array<CompanyIncomeStatementItem> {

    public constructor() {
        super();
        // Quarterly revenue and expenses in thousands, which is how the statement reports them.
        var reported = [
            { date: "Jan 1, 2019", revenue: 16914, expenses: 10183 },
            { date: "Mar 1, 2019", revenue: 15077, expenses: 12813 },
            { date: "Jun 1, 2019", revenue: 16886, expenses: 14476 },
            { date: "Sep 1, 2019", revenue: 17652, expenses: 11705 },
            { date: "Jan 1, 2020", revenue: 21082, expenses: 14044 },
            { date: "Mar 1, 2020", revenue: 17737, expenses: 12803 },
            { date: "Jun 1, 2020", revenue: 18687, expenses: 13677 },
            { date: "Sep 1, 2020", revenue: 21470, expenses: 13717 },
            { date: "Jan 1, 2021", revenue: 28072, expenses: 17133 }
        ];

        for (var i = 0; i < reported.length; i++) {
            var item = new CompanyIncomeStatementItem();
            item.Date = reported[i].date;
            item.Revenue = reported[i].revenue * 1000;
            item.Expenses = reported[i].expenses * 1000;
            item.Income = item.Revenue - item.Expenses;
            item.IncomePerRevenue = (item.Income / item.Revenue) * 100;
            // Where each callout sits along the category axis. The two column series are clustered
            // side by side, so the expenses callout is offset half a category from the revenue one
            // to land over its own column.
            item.RevenueX = i;
            item.ExpensesX = i + 0.5;
            item.FormattedRevenue = "$" + CompanyIncomeStatement.abbreviate(item.Revenue);
            item.FormattedExpenses = "$" + CompanyIncomeStatement.abbreviate(item.Expenses);
            item.FormattedIncome = "$" + CompanyIncomeStatement.abbreviate(item.Income);
            item.FormattedProfit = item.IncomePerRevenue + "%";
            this.push(item);
        }
    }

    // Callout labels have room for a few characters, so millions and thousands are abbreviated and
    // anything smaller keeps its thousands separators.
    private static abbreviate(value: number): string {
        if (value >= 1000000) {
            return (value / 1000000.0).toFixed(1) + "M";
        }
        if (value >= 1000) {
            return (value / 1000.0).toFixed(1) + "K";
        }
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}
//end data
