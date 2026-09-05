
namespace Infragistics.Samples
{
    //begin data
    using System;
    using System.Collections.Generic;

    public class EmployeesSalesData : List<EmployeesSalesDataItem>
    {
        public EmployeesSalesData() : this(100, false)
        {
        }

        public EmployeesSalesData(int count, bool useProductivity)
        {
            for (int i = 0; i < count; i++)
            {
                var age = Math.Round(EmployeesSalesDataGenerator.GetNumber(20, 40));
                var gender = EmployeesSalesDataGenerator.GetGender();
                var firstName = EmployeesSalesDataGenerator.GetNameFirst(gender);
                var lastName = EmployeesSalesDataGenerator.GetNameLast();
                var street = EmployeesSalesDataGenerator.GetStreet();
                var country = EmployeesSalesDataGenerator.GetCountry();
                var city = EmployeesSalesDataGenerator.GetCity(country);
                var email = firstName.ToLower() + "@" + EmployeesSalesDataGenerator.GetEmail();
                var photoPath = EmployeesSalesDataGenerator.GetPhoto(gender);

                var employee = new EmployeesSalesDataItem
                {
                    Index = i,
                    Address = street + ", " + city,
                    Age = age,
                    Birthday = EmployeesSalesDataGenerator.GetBirthday(),
                    City = city,
                    Email = email,
                    Gender = gender,
                    ID = EmployeesSalesDataGenerator.Pad(1001 + i, 4),
                    FirstName = firstName,
                    LastName = lastName,
                    Name = firstName + " " + lastName,
                    Photo = photoPath,
                    Phone = EmployeesSalesDataGenerator.GetPhone(),
                    Street = EmployeesSalesDataGenerator.GetStreet(),
                    Salary = EmployeesSalesDataGenerator.GetNumber(40, 200) * 1000,
                    Sales = EmployeesSalesDataGenerator.GetNumber(200, 980) * 1000,
                };
                employee.Country = country;

                employee.Income = EmployeesSalesDataGenerator.GetIncomeRange(employee.Salary);

                if (useProductivity)
                {
                    employee.Productivity = GetProductivity(52);
                }
                this.Add(employee);
            }
        }

        public static List<ProductivityItem> GetProductivity(int weekCount)
        {
            var productivity = new List<ProductivityItem>();
            for (var w = 1; w <= weekCount; w++)
            {
                var value = EmployeesSalesDataGenerator.GetNumber(-50, 50);
                productivity.Add(new ProductivityItem { Value = value, Week = w });
            }
            return productivity;
        }
    }

    public class ProductivityItem
    {
        public double Value { get; set; }
        public int Week { get; set; }
    }

    public class EmployeesSalesDataItem
    {
        public string ID { get; set; }
        public string Address { get; set; }
        public double Age { get; set; }
        public string Gender { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Name { get; set; }
        public string Street { get; set; }
        public string City { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Photo { get; set; }
        public double Salary { get; set; }
        public double Sales { get; set; }
        public string Income { get; set; }
        public int Index { get; set; }

        public DateTime Birthday { get; set; }
        public List<ProductivityItem> Productivity { get; set; }

        private string _Country;
        public string Country
        {
            get { return _Country; }
            set
            {
                if (_Country != value)
                {
                    _Country = value;
                    CountryFlag = EmployeesSalesDataGenerator.GetCountryFlag(value);
                    City = EmployeesSalesDataGenerator.GetCity(value);
                }
            }
        }

        public string CountryFlag { get; set; }
    }

    internal static class EmployeesSalesDataGenerator
    {
        static readonly string[] websites = { ".com", ".gov", ".edu", ".org" };
        static readonly string[] emails = { "gmail.com", "yahoo.com", "twitter.com" };
        static readonly string[] genders = { "male", "female" };
        static readonly string[] maleNames = { "Kyle", "Oscar", "Ralph", "Mike", "Bill", "Frank", "Howard", "Jack", "Larry", "Pete", "Steve", "Vince", "Mark", "Alex", "Max", "Brian", "Chris", "Andrew", "Martin", "Mike", "Steve", "Glenn", "Bruce" };
        static readonly string[] femaleNames = { "Gina", "Irene", "Katie", "Brenda", "Casey", "Fiona", "Holly", "Kate", "Liz", "Pamela", "Nelly", "Marisa", "Monica", "Anna", "Jessica", "Sofia", "Isabella", "Margo", "Jane", "Audrey", "Sally", "Melanie", "Greta", "Aurora", "Sally" };
        static readonly string[] lastNames = { "Adams", "Crowley", "Ellis", "Martinez", "Irvine", "Maxwell", "Clark", "Owens", "Rooney", "Lincoln", "Thomas", "Spacey", "MOrgan", "King", "Newton", "Fitzgerald", "Holmes", "Jefferson", "Landry", "Berry", "Perez", "Spencer", "Starr", "Carter", "Edwards", "Stark", "Johnson", "Fitz", "Chief", "Blanc", "Perry", "Stone", "Williams", "Lane", "Jobs", "Adams", "Power", "Tesla" };
        static readonly string[] countries = { "USA", "UK", "France", "Canada", "Poland" };
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

        public static string GetWebsite() { return GetItem(websites); }
        public static string GetEmail() { return GetItem(emails); }
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

        public static string GetCountry() { return GetItem(countries); }

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

        public static DateTime GetBirthday()
        {
            var year = DateTime.Now.Year - GetInteger(30, 50);
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

        public static string GetPhotoMale(int id)   { return "https://static.infragistics.com/xplatform/images/people/GUY"  + Pad(id, 2) + ".png"; }
        public static string GetPhotoFemale(int id) { return "https://static.infragistics.com/xplatform/images/people/GIRL" + Pad(id, 2) + ".png"; }

        private static int maleCount = 0;
        private static int femaleCount = 0;
        public static string GetPhoto(string gender)
        {
            if (gender == "male")
            {
                maleCount++;
                if (maleCount > 24) maleCount = 1;
                return GetPhotoMale(maleCount);
            }
            else
            {
                femaleCount++;
                if (femaleCount > 24) femaleCount = 1;
                return GetPhotoFemale(femaleCount);
            }
        }

        public static string GetCountryFlag(string country)
        {
            return "https://static.infragistics.com/xplatform/images/flags/" + country + ".png";
        }

        public static string GetIncomeRange(double salary)
        {
            if (salary < 50000) return "Low";
            if (salary < 100000) return "Average";
            return "High";
        }
    }
    //end data
}
