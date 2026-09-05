
namespace Infragistics.Samples
{
    //begin data
    using System;
    using System.Collections.Generic;
    using System.Globalization;

    public class CompanyIncomeStatementItem
    {
        public string Date { get; set; }
        public double Revenue { get; set; }
        public double Expenses { get; set; }
        public double Income { get; set; }
        public double IncomePerRevenue { get; set; }
        public double RevenueX { get; set; }
        public double ExpensesX { get; set; }
        public string FormattedRevenue { get; set; }
        public string FormattedExpenses { get; set; }
        public string FormattedIncome { get; set; }
        public string FormattedProfit { get; set; }
    }

    public class CompanyIncomeStatement : List<CompanyIncomeStatementItem>
    {
        public CompanyIncomeStatement()
        {
            // Quarterly revenue and expenses in thousands, which is how the statement reports them.
            var reported = new double[][]
            {
                new double[] { 16914, 10183 },
                new double[] { 15077, 12813 },
                new double[] { 16886, 14476 },
                new double[] { 17652, 11705 },
                new double[] { 21082, 14044 },
                new double[] { 17737, 12803 },
                new double[] { 18687, 13677 },
                new double[] { 21470, 13717 },
                new double[] { 28072, 17133 }
            };
            var dates = new string[]
            {
                "Jan 1, 2019", "Mar 1, 2019", "Jun 1, 2019", "Sep 1, 2019",
                "Jan 1, 2020", "Mar 1, 2020", "Jun 1, 2020", "Sep 1, 2020",
                "Jan 1, 2021"
            };

            for (var i = 0; i < reported.Length; i++)
            {
                var item = new CompanyIncomeStatementItem();
                item.Date = dates[i];
                item.Revenue = reported[i][0] * 1000;
                item.Expenses = reported[i][1] * 1000;
                item.Income = item.Revenue - item.Expenses;
                item.IncomePerRevenue = (item.Income / item.Revenue) * 100;
                // Where each callout sits along the category axis. The two column series are
                // clustered side by side, so the expenses callout is offset half a category from
                // the revenue one to land over its own column.
                item.RevenueX = i;
                item.ExpensesX = i + 0.5;
                item.FormattedRevenue = "$" + Abbreviate(item.Revenue);
                item.FormattedExpenses = "$" + Abbreviate(item.Expenses);
                item.FormattedIncome = "$" + Abbreviate(item.Income);
                item.FormattedProfit = item.IncomePerRevenue + "%";
                this.Add(item);
            }
        }

        // Callout labels have room for a few characters, so millions and thousands are abbreviated
        // and anything smaller keeps its thousands separators.
        private static string Abbreviate(double value)
        {
            if (value >= 1000000)
            {
                return (value / 1000000.0).ToString("F1", CultureInfo.InvariantCulture) + "M";
            }
            if (value >= 1000)
            {
                return (value / 1000.0).ToString("F1", CultureInfo.InvariantCulture) + "K";
            }
            return value.ToString("#,0", CultureInfo.InvariantCulture);
        }
    }
    //end data
}
