
namespace Infragistics.Samples
{
    //begin async data
    using System;
    using System.Collections.Generic;

    public class ProductOrders : List<ProductOrdersItem>
    {
        public ProductOrders() : this(100)
        {
        }

        public ProductOrders(int count)
        {
            string[] names = {
                "Intel CPU", "AMD CPU",
                "Intel Motherboard", "AMD Motherboard", "NVIDIA Motherboard",
                "NVIDIA GPU", "GIGABYTE GPU", "Asus GPU", "AMD GPU", "MSI GPU",
                "Corsair Memory", "Patriot Memory", "Skill Memory",
                "Samsung HDD", "WD HDD", "Seagate HDD", "Intel HDD",
                "Samsung SSD", "WD SSD", "Seagate SSD", "Intel SSD",
                "Samsung Monitor", "Asus Monitor", "LG Monitor", "HP Monitor" };
            string[] countries = { "USA", "UK", "France", "Canada", "Poland", "Japan", "Germany" };
            string[] status = { "Packing", "Shipped", "Delivered" };

            for (var i = 0; i < count; i++)
            {
                var price = ProductOrdersGenerator.GetNumber(100, 900);
                var items = ProductOrdersGenerator.GetNumber(10, 80);
                var value = price * items;
                var margin = ProductOrdersGenerator.GetNumber(3, 10);
                var profit = Math.Round((price * margin / 100) * items);
                var country = ProductOrdersGenerator.GetItem(countries);
                var city = ProductOrdersGenerator.GetCity(country);

                this.Add(new ProductOrdersItem
                {
                    ID = ProductOrdersGenerator.Pad(1001 + i, 4),
                    ProductID = 1001 + i,
                    BundlePrice = price,
                    ProductPrice = price,
                    Margin = margin,
                    OrderDate = ProductOrdersGenerator.GetDate(),
                    OrderItems = items,
                    OrderValue = value,
                    ProductName = ProductOrdersGenerator.GetItem(names),
                    Profit = profit,
                    City = city,
                    Country = country,
                    CountryFlag = ProductOrdersGenerator.GetCountryFlag(country),
                    Status = ProductOrdersGenerator.GetItem(status)
                });
            }
        }
    }

    public class ProductOrdersItem
    {
        public DateTime OrderDate { get; set; }
        public string ID { get; set; }
        public double ProductID { get; set; }
        public string ProductName { get; set; }
        public double ProductPrice { get; set; }
        public double BundlePrice { get; set; }
        public double Margin { get; set; }
        public double OrderItems { get; set; }
        public double OrderValue { get; set; }
        public double Profit { get; set; }
        public string Country { get; set; }
        public string CountryFlag { get; set; }
        public string City { get; set; }
        public string Status { get; set; }
    }

    internal static class ProductOrdersGenerator
    {
        static readonly string[] citiesUS = { "New York", "Los Angeles", "Miami", "San Francisco", "San Diego", "Las Vegas" };
        static readonly string[] citiesUK = { "London", "Liverpool", "Manchester" };
        static readonly string[] citiesFR = { "Paris", "Marseille", "Lyon" };
        static readonly string[] citiesCA = { "Toronto", "Vancouver", "Montreal" };
        static readonly string[] citiesPL = { "Krakow", "Warsaw", "Wroclaw", "Gdansk" };
        static readonly string[] citiesJP = { "Tokyo", "Osaka", "Kyoto", "Yokohama" };
        static readonly string[] citiesGR = { "Berlin", "Bonn", "Cologne", "Munich", "Hamburg" };

        public static Random Rand = new Random();

        public static double GetNumber(double min, double max) { return Math.Round(min + (Rand.NextDouble() * (max - min))); }
        public static int GetInteger(double min, double max) { return (int)GetNumber(min, max); }

        public static string GetItem(string[] array)
        {
            var index = (int)Math.Round(GetNumber(0, array.Length - 1));
            return array[index];
        }

        public static string GetCity(string country)
        {
            if (country == "Canada") return GetItem(citiesCA);
            if (country == "France") return GetItem(citiesFR);
            if (country == "Poland") return GetItem(citiesPL);
            if (country == "USA")    return GetItem(citiesUS);
            if (country == "Japan")  return GetItem(citiesJP);
            if (country == "Germany")return GetItem(citiesGR);
            return GetItem(citiesUK);
        }

        public static DateTime GetDate()
        {
            var year = DateTime.Now.Year;
            var month = GetNumber(10, 12);
            var day = GetNumber(20, 27);
            return new DateTime(year, (int)month, (int)day);
        }

        public static string Pad(int num, int size)
        {
            var s = num + "";
            while (s.Length < size) s = "0" + s;
            return s;
        }

        public static string GetCountryFlag(string country)
        {
            return "https://static.infragistics.com/xplatform/images/flags/" + country + ".png";
        }
    }
}
