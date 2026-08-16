namespace Infragistics.Samples
{
    //begin data
    using System;
    using System.Collections.Generic;

    public class ProductsWithHistory : List<ProductWithHistory>
    {
        public ProductsWithHistory() : this(20)
        {
        }

        public ProductsWithHistory(int count)
        {
            for (int i = 0; i < count; i++)
            {
                var price = ProductsWithHistoryGenerator.GetNumber(10000, 90000) / 100.0;
                var orderCount = ProductsWithHistoryGenerator.GetNumber(4, 30);
                var orderValue = Math.Round(price * orderCount);
                var margin = ProductsWithHistoryGenerator.GetNumber(5, 10);
                var country = ProductsWithHistoryGenerator.GetItem(ProductsWithHistoryGenerator.Countries);

                this.Add(new ProductWithHistory
                {
                    CountryFlag = "https://dl.infragistics.com/x/img/flags/" + country + ".png",
                    CountryName = country,
                    Margin = margin,
                    OrderCount = orderCount,
                    // data source for the embedded sparkline
                    OrderHistory = ProductsWithHistoryGenerator.GetOrderHistory(26),
                    OrderShipped = ProductsWithHistoryGenerator.GetNumber(30, 100),
                    OrderValue = orderValue,
                    OrderDate = ProductsWithHistoryGenerator.GetDate(),
                    ProductID = ProductsWithHistoryGenerator.Pad(count - i, count.ToString().Length),
                    ProductName = ProductsWithHistoryGenerator.GetItem(ProductsWithHistoryGenerator.Names),
                    ProductPrice = price,
                    Profit = Math.Round(orderValue * (margin / 100.0)),
                    ReturnRate = ProductsWithHistoryGenerator.GetReturnRate(52),
                    Status = ProductsWithHistoryGenerator.GetItem(ProductsWithHistoryGenerator.Statuses),
                });
            }
        }
    }

    public class ProductWithHistory
    {
        public string CountryFlag { get; set; }
        public string CountryName { get; set; }
        public double Margin { get; set; }
        public double OrderCount { get; set; }
        public List<ProductWeeklySale> OrderHistory { get; set; }
        public double OrderShipped { get; set; }
        public double OrderValue { get; set; }
        public DateTime OrderDate { get; set; }
        public string ProductID { get; set; }
        public string ProductName { get; set; }
        public double ProductPrice { get; set; }
        public double Profit { get; set; }
        public List<ProductWeeklyBalance> ReturnRate { get; set; }
        public string Status { get; set; }
    }

    /// <summary>One week of the order history a sparkline draws.</summary>
    public class ProductWeeklySale
    {
        public double Sold { get; set; }
        public double Week { get; set; }
    }

    /// <summary>One week of the return rate, which runs either side of zero.</summary>
    public class ProductWeeklyBalance
    {
        public double Balance { get; set; }
        public double Week { get; set; }
    }

    public class ProductsWithHistoryGenerator
    {
        private static Random _random = new Random();

        public static string[] Names = new string[]
        {
            "Intel CPU", "AMD CPU",
            "Nvidia GPU", "Gigabyte GPU", "Asus GPU", "AMD GPU", "MSI GPU",
            "Corsair Memory", "Patriot Memory", "Skill Memory",
            "Samsung HDD", "WD HDD", "Seagate HDD", "Intel HDD", "Asus HDD",
            "Samsung SSD", "WD SSD", "Seagate SSD", "Intel SSD", "Asus SSD",
            "Samsung Monitor", "Asus Monitor", "LG Monitor", "HP Monitor"
        };

        public static string[] Countries = new string[]
        {
            "United-States", "United-Kingdom", "France", "Canada", "Poland",
            "Denmark", "Croatia", "Australia", "Seychelles",
            "Sweden", "Germany", "Japan", "Ireland",
            "Barbados", "Jamaica", "Cuba", "Spain"
        };

        public static string[] Statuses = new string[] { "Packing", "Shipped", "Delivered" };

        public static List<ProductWeeklySale> GetOrderHistory(int weekCount)
        {
            var sales = new List<ProductWeeklySale>();
            for (int w = 0; w < weekCount; w++)
            {
                sales.Add(new ProductWeeklySale { Sold = GetNumber(0, 100), Week = w });
            }
            return sales;
        }

        public static List<ProductWeeklyBalance> GetReturnRate(int weekCount)
        {
            var rates = new List<ProductWeeklyBalance>();
            for (int w = 0; w < weekCount; w++)
            {
                rates.Add(new ProductWeeklyBalance { Balance = GetNumber(-100, 100), Week = w });
            }
            return rates;
        }

        public static DateTime GetDate()
        {
            var today = DateTime.Today;
            return new DateTime(today.Year, (int)GetNumber(1, 9), (int)GetNumber(10, 27));
        }

        public static double GetNumber(double min, double max)
        {
            return Math.Round(min + _random.NextDouble() * (max - min));
        }

        public static string GetItem(string[] items)
        {
            return items[(int)GetNumber(0, items.Length - 1)];
        }

        public static string Pad(int num, int size)
        {
            return num.ToString().PadLeft(size, '0');
        }
    }
    //end data
}
