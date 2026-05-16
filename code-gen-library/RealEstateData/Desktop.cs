
namespace Infragistics.Samples
{
    //begin data
    using System;
    using System.Collections.Generic;

    public class RealEstateData : List<RealEstateDataItem>
    {
        public RealEstateData() : this(100)
        {
        }

        public RealEstateData(int count)
        {
            string[] property = { "Townhouse", "Single", "Condo", "Villa" };
            string[] emails = { "estates.com", "remax.com", "zillow.com", "realtor.com", "coldwell.com" };
            string[] countries = { "USA", "UK", "France", "Canada", "Poland", "Japan", "Germany" };

            for (var i = 0; i < count; i++)
            {
                var year = RealEstateDataGenerator.GetNumber(1950, 2015);
                var age = 2020 - year;

                var gender = RealEstateDataGenerator.GetGender();
                var firstName = RealEstateDataGenerator.GetNameFirst(gender);
                var lastName = RealEstateDataGenerator.GetNameLast();
                var initials = firstName.Substring(0, 1).ToLower();
                var email = initials + firstName.ToLower() + "@" + RealEstateDataGenerator.GetItem(emails);
                var street = RealEstateDataGenerator.GetStreet();
                var country = RealEstateDataGenerator.GetItem(countries);
                var city = RealEstateDataGenerator.GetCity(country);

                this.Add(new RealEstateDataItem
                {
                    Address = street,
                    Age = age,
                    Agent = firstName + " " + lastName,
                    Area = RealEstateDataGenerator.GetNumber(50, 300),
                    Baths = RealEstateDataGenerator.GetNumber(1, 3),
                    Built = year,
                    City = city,
                    Country = country,
                    CountryFlag = RealEstateDataGenerator.GetCountryFlag(country),
                    Email = email,
                    ID = RealEstateDataGenerator.Pad(i + 1001, 4),
                    Phone = RealEstateDataGenerator.GetPhone(),
                    Price = RealEstateDataGenerator.GetNumber(210, 900) * 1000,
                    Property = RealEstateDataGenerator.GetItem(property),
                    Rooms = RealEstateDataGenerator.GetNumber(2, 5),
                    SaleDate = RealEstateDataGenerator.GetDate(),
                    Street = street
                });
            }
        }
    }

    public class RealEstateDataItem
    {
        public string ID { get; set; }
        public string Address { get; set; }
        public string Street { get; set; }
        public string Country { get; set; }
        public string CountryFlag { get; set; }
        public string City { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }

        public double Age { get; set; }
        public double Baths { get; set; }
        public double Built { get; set; }
        public string Property { get; set; }
        public double Rooms { get; set; }
        public string Agent { get; set; }
        public double Area { get; set; }
        public double Price { get; set; }
        public DateTime SaleDate { get; set; }
    }

    internal static class RealEstateDataGenerator
    {
        static readonly string[] genders = { "male", "female" };
        static readonly string[] maleNames = { "Kyle", "Oscar", "Ralph", "Mike", "Bill", "Frank", "Howard", "Jack", "Larry", "Pete", "Steve", "Vince", "Mark", "Alex", "Max", "Brian", "Chris", "Andrew", "Martin", "Mike", "Steve", "Glenn", "Bruce" };
        static readonly string[] femaleNames = { "Gina", "Irene", "Katie", "Brenda", "Casey", "Fiona", "Holly", "Kate", "Liz", "Pamela", "Nelly", "Marisa", "Monica", "Anna", "Jessica", "Sofia", "Isabella", "Margo", "Jane", "Audrey", "Sally", "Melanie", "Greta", "Aurora", "Sally" };
        static readonly string[] lastNames = { "Adams", "Crowley", "Ellis", "Martinez", "Irvine", "Maxwell", "Clark", "Owens", "Rooney", "Lincoln", "Thomas", "Spacey", "MOrgan", "King", "Newton", "Fitzgerald", "Holmes", "Jefferson", "Landry", "Berry", "Perez", "Spencer", "Starr", "Carter", "Edwards", "Stark", "Johnson", "Fitz", "Chief", "Blanc", "Perry", "Stone", "Williams", "Lane", "Jobs", "Adams", "Power", "Tesla" };
        static readonly string[] citiesUS = { "New York", "Los Angeles", "Miami", "San Francisco", "San Diego", "Las Vegas" };
        static readonly string[] citiesUK = { "London", "Liverpool", "Manchester" };
        static readonly string[] citiesFR = { "Paris", "Marseille", "Lyon" };
        static readonly string[] citiesCA = { "Toronto", "Vancouver", "Montreal" };
        static readonly string[] citiesPL = { "Krakow", "Warsaw", "Wroclaw", "Gdansk" };
        static readonly string[] citiesJP = { "Tokyo", "Osaka", "Kyoto", "Yokohama" };
        static readonly string[] citiesGR = { "Berlin", "Bonn", "Cologne", "Munich", "Hamburg" };
        static readonly string[] roadSuffixes = { "Road", "Street", "Way" };
        static readonly string[] roadNames = { "Main", "Garden", "Broad", "Oak", "Cedar", "Park", "Pine", "Elm", "Market", "Hill" };

        public static Random Rand = new Random();

        public static double GetNumber(double min, double max) { return Math.Round(min + (Rand.NextDouble() * (max - min))); }
        public static int GetInteger(double min, double max) { return (int)GetNumber(min, max); }

        public static string GetPhone()
        {
            var phoneCode = GetNumber(100, 900);
            var phoneNum1 = GetNumber(100, 900);
            var phoneNum2 = GetNumber(1000, 9000);
            return phoneCode + "-" + phoneNum1 + "-" + phoneNum2;
        }

        public static string GetGender() { return GetItem(genders); }
        public static string GetNameFirst(string gender) { return gender == "male" ? GetItem(maleNames) : GetItem(femaleNames); }
        public static string GetNameLast() { return GetItem(lastNames); }

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

        public static string GetStreet()
        {
            var num = Math.Round(GetNumber(100, 300)).ToString();
            var road = GetItem(roadNames);
            var suffix = GetItem(roadSuffixes);
            return num + " " + road + " " + suffix;
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
    //end data
}
