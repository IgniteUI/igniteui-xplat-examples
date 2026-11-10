//begin data
import 'dart:math' as math;
import 'package:igniteui_flutter_core/src/ArrayList.dart' show ArrayList;
import 'package:igniteui_flutter_core/src/MathUtilCore.dart' show MathUtilCore;
import 'package:igniteui_flutter_core/src/reflection.dart' show IReflectable, IReflectableSet;

// The keys stay as the C# and TypeScript spell them: a data item defined in
// code keeps its own casing across platforms, and these are the names the
// member paths in the descriptions ask for.
class ProductivityItem implements IReflectable, IReflectableSet {
    double value = 0;
    int week = 0;

    Object? getValue(String? propertyName) {
        switch (propertyName) {
            case "Value":
                return this.value;
            case "Week":
                return this.week;
        }
        return null;
    }

    void setValue(String? propertyName, Object? value) {
        switch (propertyName) {
            case "Value":
                this.value = (value as num).toDouble();
                break;
            case "Week":
                this.week = (value as num).toInt();
                break;
        }
    }
}

class EmployeesSalesDataItem implements IReflectable, IReflectableSet {
    String? id = null;
    String? address = null;
    double age = 0;
    String? gender = null;
    String? firstName = null;
    String? lastName = null;
    String? name = null;
    String? street = null;
    String? city = null;
    String? email = null;
    String? phone = null;
    String? photo = null;
    double salary = 0;
    double sales = 0;
    String? income = null;
    int index = 0;
    DateTime? birthday = null;
    ArrayList<ProductivityItem?>? productivity = null;
    String? countryFlag = null;

    // Setting the country also settles the flag and the city, as it does in the
    // C#: the item is built country-last and leans on that.
    String? _country = null;
    String? get country {
        return _country;
    }
    set country(String? value) {
        if (_country != value) {
            _country = value;
            countryFlag = EmployeesSalesDataGenerator.getCountryFlag(value);
            city = EmployeesSalesDataGenerator.getCity(value);
        }
    }

    Object? getValue(String? propertyName) {
        switch (propertyName) {
            case "ID":
                return this.id;
            case "Address":
                return this.address;
            case "Age":
                return this.age;
            case "Gender":
                return this.gender;
            case "FirstName":
                return this.firstName;
            case "LastName":
                return this.lastName;
            case "Name":
                return this.name;
            case "Street":
                return this.street;
            case "City":
                return this.city;
            case "Email":
                return this.email;
            case "Phone":
                return this.phone;
            case "Photo":
                return this.photo;
            case "Salary":
                return this.salary;
            case "Sales":
                return this.sales;
            case "Income":
                return this.income;
            case "Index":
                return this.index;
            case "Birthday":
                return this.birthday;
            case "Productivity":
                return this.productivity;
            case "Country":
                return this.country;
            case "CountryFlag":
                return this.countryFlag;
        }
        return null;
    }

    void setValue(String? propertyName, Object? value) {
        switch (propertyName) {
            case "ID":
                this.id = value as String?;
                break;
            case "Address":
                this.address = value as String?;
                break;
            case "Age":
                this.age = (value as num).toDouble();
                break;
            case "Gender":
                this.gender = value as String?;
                break;
            case "FirstName":
                this.firstName = value as String?;
                break;
            case "LastName":
                this.lastName = value as String?;
                break;
            case "Name":
                this.name = value as String?;
                break;
            case "Street":
                this.street = value as String?;
                break;
            case "City":
                this.city = value as String?;
                break;
            case "Email":
                this.email = value as String?;
                break;
            case "Phone":
                this.phone = value as String?;
                break;
            case "Photo":
                this.photo = value as String?;
                break;
            case "Salary":
                this.salary = (value as num).toDouble();
                break;
            case "Sales":
                this.sales = (value as num).toDouble();
                break;
            case "Income":
                this.income = value as String?;
                break;
            case "Index":
                this.index = (value as num).toInt();
                break;
            case "Birthday":
                this.birthday = value as DateTime?;
                break;
            case "Productivity":
                this.productivity = value as ArrayList<ProductivityItem?>?;
                break;
            case "Country":
                this.country = value as String?;
                break;
            case "CountryFlag":
                this.countryFlag = value as String?;
                break;
        }
    }
}

class EmployeesSalesDataGenerator {
    static const List<String> websites = <String>[".com", ".gov", ".edu", ".org"];
    static const List<String> emails = <String>["gmail.com", "yahoo.com", "twitter.com"];
    static const List<String> genders = <String>["male", "female"];
    static const List<String> maleNames = <String>["Kyle", "Oscar", "Ralph", "Mike", "Bill", "Frank", "Howard", "Jack", "Larry", "Pete", "Steve", "Vince", "Mark", "Alex", "Max", "Brian", "Chris", "Andrew", "Martin", "Mike", "Steve", "Glenn", "Bruce"];
    static const List<String> femaleNames = <String>["Gina", "Irene", "Katie", "Brenda", "Casey", "Fiona", "Holly", "Kate", "Liz", "Pamela", "Nelly", "Marisa", "Monica", "Anna", "Jessica", "Sofia", "Isabella", "Margo", "Jane", "Audrey", "Sally", "Melanie", "Greta", "Aurora", "Sally"];
    static const List<String> lastNames = <String>["Adams", "Crowley", "Ellis", "Martinez", "Irvine", "Maxwell", "Clark", "Owens", "Rooney", "Lincoln", "Thomas", "Spacey", "MOrgan", "King", "Newton", "Fitzgerald", "Holmes", "Jefferson", "Landry", "Berry", "Perez", "Spencer", "Starr", "Carter", "Edwards", "Stark", "Johnson", "Fitz", "Chief", "Blanc", "Perry", "Stone", "Williams", "Lane", "Jobs", "Adams", "Power", "Tesla"];
    static const List<String> countries = <String>["USA", "UK", "France", "Canada", "Poland"];
    static const List<String> citiesUS = <String>["New York", "Los Angeles", "Miami", "San Francisco", "San Diego", "Las Vegas"];
    static const List<String> citiesUK = <String>["London", "Liverpool", "Manchester"];
    static const List<String> citiesFR = <String>["Paris", "Marseille", "Lyon"];
    static const List<String> citiesCA = <String>["Toronto", "Vancouver", "Montreal"];
    static const List<String> citiesPL = <String>["Krakow", "Warsaw", "Wroclaw", "Gdansk"];
    static const List<String> citiesJP = <String>["Tokyo", "Osaka", "Kyoto", "Yokohama"];
    static const List<String> citiesGR = <String>["Berlin", "Bonn", "Cologne", "Munich", "Hamburg"];
    static const List<String> roadSuffixes = <String>["Road", "Street", "Way"];
    static const List<String> roadNames = <String>["Main", "Garden", "Broad", "Oak", "Cedar", "Park", "Pine", "Elm", "Market", "Hill"];

    static math.Random rand = math.Random();

    static String getWebsite() {
        return getItem(websites);
    }

    static String getEmail() {
        return getItem(emails);
    }

    static double getNumber(double min, double max) {
        return (min + (rand.nextDouble() * (max - min))).roundToDouble();
    }

    static int getInteger(double min, double max) {
        return getNumber(min, max).toInt();
    }

    // The numbers go straight into a string. C# renders a double as "123" there
    // where Dart's toString gives "123.0", so these go through the product's own
    // min-decimal formatting.
    static String getPhone() {
        var phoneCode = MathUtilCore.numberToMinDecimalsString(getNumber(100, 900)) ?? "";
        var phoneNum1 = MathUtilCore.numberToMinDecimalsString(getNumber(100, 900)) ?? "";
        var phoneNum2 = MathUtilCore.numberToMinDecimalsString(getNumber(1000, 9000)) ?? "";
        return phoneCode + "-" + phoneNum1 + "-" + phoneNum2;
    }

    static String getGender() {
        return getItem(genders);
    }

    static String getNameFirst(String gender) {
        return gender == "male" ? getItem(maleNames) : getItem(femaleNames);
    }

    static String getNameLast() {
        return getItem(lastNames);
    }

    static String getItem(List<String> array) {
        var index = getNumber(0, (array.length - 1).toDouble()).round();
        return array[index];
    }

    static String getCountry() {
        return getItem(countries);
    }

    static String getCity(String? country) {
        if (country == "Canada") return getItem(citiesCA);
        if (country == "France") return getItem(citiesFR);
        if (country == "Poland") return getItem(citiesPL);
        if (country == "USA") return getItem(citiesUS);
        if (country == "Japan") return getItem(citiesJP);
        if (country == "Germany") return getItem(citiesGR);
        return getItem(citiesUK);
    }

    static String getStreet() {
        var num = MathUtilCore.numberToMinDecimalsString(getNumber(100, 300)) ?? "";
        var road = getItem(roadNames);
        var suffix = getItem(roadSuffixes);
        return num + " " + road + " " + suffix;
    }

    static DateTime getBirthday() {
        var year = DateTime.now().year - getInteger(30, 50);
        var month = getNumber(10, 12);
        var day = getNumber(20, 27);
        return DateTime(year, month.toInt(), day.toInt());
    }

    static String pad(int num, int size) {
        var s = num.toString();
        while (s.length < size) {
            s = "0" + s;
        }
        return s;
    }

    static String getPhotoMale(int id) {
        return "https://static.infragistics.com/xplatform/images/people/GUY" + pad(id, 2) + ".png";
    }

    static String getPhotoFemale(int id) {
        return "https://static.infragistics.com/xplatform/images/people/GIRL" + pad(id, 2) + ".png";
    }

    static int _maleCount = 0;
    static int _femaleCount = 0;

    static String getPhoto(String gender) {
        if (gender == "male") {
            _maleCount++;
            if (_maleCount > 24) _maleCount = 1;
            return getPhotoMale(_maleCount);
        } else {
            _femaleCount++;
            if (_femaleCount > 24) _femaleCount = 1;
            return getPhotoFemale(_femaleCount);
        }
    }

    static String getCountryFlag(String? country) {
        return "https://static.infragistics.com/xplatform/images/flags/" + (country ?? "") + ".png";
    }

    static String getIncomeRange(double salary) {
        if (salary < 50000) return "Low";
        if (salary < 100000) return "Average";
        return "High";
    }
}

class EmployeesSalesData extends ArrayList<EmployeesSalesDataItem?> {
    EmployeesSalesData([int count = 100, bool useProductivity = false]) {
        for (var i = 0; i < count; i++) {
            var age = EmployeesSalesDataGenerator.getNumber(20, 40).roundToDouble();
            var gender = EmployeesSalesDataGenerator.getGender();
            var firstName = EmployeesSalesDataGenerator.getNameFirst(gender);
            var lastName = EmployeesSalesDataGenerator.getNameLast();
            var street = EmployeesSalesDataGenerator.getStreet();
            var country = EmployeesSalesDataGenerator.getCountry();
            var city = EmployeesSalesDataGenerator.getCity(country);
            var email = firstName.toLowerCase() + "@" + EmployeesSalesDataGenerator.getEmail();
            var photoPath = EmployeesSalesDataGenerator.getPhoto(gender);
            var employee = (EmployeesSalesDataItem()
                ..index = i
                ..address = street + ", " + city
                ..age = age
                ..birthday = EmployeesSalesDataGenerator.getBirthday()
                ..city = city
                ..email = email
                ..gender = gender
                ..id = EmployeesSalesDataGenerator.pad(1001 + i, 4)
                ..firstName = firstName
                ..lastName = lastName
                ..name = firstName + " " + lastName
                ..photo = photoPath
                ..phone = EmployeesSalesDataGenerator.getPhone()
                ..street = EmployeesSalesDataGenerator.getStreet()
                ..salary = EmployeesSalesDataGenerator.getNumber(40, 200) * 1000
                ..sales = EmployeesSalesDataGenerator.getNumber(200, 980) * 1000
            );
            employee.country = country;
            employee.income = EmployeesSalesDataGenerator.getIncomeRange(employee.salary);
            if (useProductivity) {
                employee.productivity = getProductivity(52);
            }
            this.add(employee);
        }
    }

    static ArrayList<ProductivityItem?> getProductivity(int weekCount) {
        var productivity = ArrayList<ProductivityItem?>();
        for (var w = 1; w <= weekCount; w++) {
            var value = EmployeesSalesDataGenerator.getNumber(-50, 50);
            productivity.add((ProductivityItem()
                ..value = value
                ..week = w
            ));
        }
        return productivity;
    }
}
//end data
