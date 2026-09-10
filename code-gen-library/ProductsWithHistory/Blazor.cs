namespace Infragistics.Samples
{
    //begin data
    using System;
    using System.Collections.Generic;

    public class ProductsWithHistory : List<ProductWithHistory>
    {
        private static readonly Random Random = new Random();

        public ProductsWithHistory()
        {
            var names = new[] { "Intel CPU", "AMD CPU", "Nvidia GPU", "Samsung SSD", "LG Monitor" };
            for (var i = 0; i < 20; i++)
            {
                var price = Math.Round(100 + Random.NextDouble() * 800, 2);
                var orderHistory = new List<ProductWeeklySale>();
                var returnRate = new List<ProductWeeklyBalance>();
                for (var week = 0; week < 26; week++)
                {
                    orderHistory.Add(new ProductWeeklySale { Sold = Random.Next(0, 101), Week = week });
                    returnRate.Add(new ProductWeeklyBalance { Balance = Random.Next(-100, 101), Week = week });
                }
                Add(new ProductWithHistory
                {
                    ProductID = (20 - i).ToString("D2"),
                    ProductName = names[i % names.Length],
                    ProductPrice = price,
                    OrderCount = Random.Next(4, 31),
                    OrderHistory = orderHistory,
                    ReturnRate = returnRate,
                    OrderDate = DateTime.Today.AddDays(-i),
                    Status = i % 3 == 0 ? "Packing" : i % 3 == 1 ? "Shipped" : "Delivered"
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

    public class ProductWeeklySale
    {
        public double Sold { get; set; }
        public double Week { get; set; }
    }

    public class ProductWeeklyBalance
    {
        public double Balance { get; set; }
        public double Week { get; set; }
    }
    //end data
}
