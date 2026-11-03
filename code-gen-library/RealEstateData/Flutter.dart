//begin data
import 'dart:math' as math;
import 'package:igniteui_flutter_core/src/ArrayList.dart' show ArrayList;
import 'package:igniteui_flutter_core/src/MathUtilCore.dart' show MathUtilCore;
import 'package:igniteui_flutter_core/src/reflection.dart' show IReflectable, IReflectableSet;

// The keys stay as the C# and TypeScript spell them: a data item defined in
// code keeps its own casing across platforms, and these are the names the
// member paths in the descriptions ask for.
class RealEstateDataItem implements IReflectable, IReflectableSet {
    String? id = null;
    String? address = null;
    String? street = null;
    String? country = null;
    String? countryFlag = null;
    String? city = null;
    String? email = null;
    String? phone = null;
    double age = 0;
    double baths = 0;
    double built = 0;
    String? property = null;
    double rooms = 0;
    String? agent = null;
    double area = 0;
    double price = 0;
    DateTime? saleDate = null;

    Object? getValue(String? propertyName) {
        switch (propertyName) {
            case "ID":
                return this.id;
            case "Address":
                return this.address;
            case "Street":
                return this.street;
            case "Country":
                return this.country;
            case "CountryFlag":
                return this.countryFlag;
            case "City":
                return this.city;
            case "Email":
                return this.email;
            case "Phone":
                return this.phone;
            case "Age":
                return this.age;
            case "Baths":
                return this.baths;
            case "Built":
                return this.built;
            case "Property":
                return this.property;
            case "Rooms":
                return this.rooms;
            case "Agent":
                return this.agent;
            case "Area":
                return this.area;
            case "Price":
                return this.price;
            case "SaleDate":
                return this.saleDate;
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
            case "Street":
                this.street = value as String?;
                break;
            case "Country":
                this.country = value as String?;
                break;
            case "CountryFlag":
                this.countryFlag = value as String?;
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
            case "Age":
                this.age = (value as num).toDouble();
                break;
            case "Baths":
                this.baths = (value as num).toDouble();
                break;
            case "Built":
                this.built = (value as num).toDouble();
                break;
            case "Property":
                this.property = value as String?;
                break;
            case "Rooms":
                this.rooms = (value as num).toDouble();
                break;
            case "Agent":
                this.agent = value as String?;
                break;
            case "Area":
                this.area = (value as num).toDouble();
                break;
            case "Price":
                this.price = (value as num).toDouble();
                break;
            case "SaleDate":
                this.saleDate = value as DateTime?;
                break;
        }
    }
}

class RealEstateDataGenerator {
    static const List<String> genders = <String>["male", "female"];
    static const List<String> maleNames = <String>["Kyle", "Oscar", "Ralph", "Mike", "Bill", "Frank", "Howard", "Jack", "Larry", "Pete", "Steve", "Vince", "Mark", "Alex", "Max", "Brian", "Chris", "Andrew", "Martin", "Mike", "Steve", "Glenn", "Bruce"];
    static const List<String> femaleNames = <String>["Gina", "Irene", "Katie", "Brenda", "Casey", "Fiona", "Holly", "Kate", "Liz", "Pamela", "Nelly", "Marisa", "Monica", "Anna", "Jessica", "Sofia", "Isabella", "Margo", "Jane", "Audrey", "Sally", "Melanie", "Greta", "Aurora", "Sally"];
    static const List<String> lastNames = <String>["Adams", "Crowley", "Ellis", "Martinez", "Irvine", "Maxwell", "Clark", "Owens", "Rooney", "Lincoln", "Thomas", "Spacey", "MOrgan", "King", "Newton", "Fitzgerald", "Holmes", "Jefferson", "Landry", "Berry", "Perez", "Spencer", "Starr", "Carter", "Edwards", "Stark", "Johnson", "Fitz", "Chief", "Blanc", "Perry", "Stone", "Williams", "Lane", "Jobs", "Adams", "Power", "Tesla"];
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

    static double getNumber(double min, double max) {
        return (min + (rand.nextDouble() * (max - min))).roundToDouble();
    }

    static int getInteger(double min, double max) {
        return getNumber(min, max).toInt();
    }

    // C# renders a double as "123" where Dart's toString gives "123.0", and
    // these go straight into a string. numberToMinDecimalsString is the
    // product's own answer for that, and it keeps any fraction a value does
    // carry rather than truncating it away.
    static String getPhone() {
        var phoneCode = MathUtilCore.numberToMinDecimalsString(getNumber(100, 900));
        var phoneNum1 = MathUtilCore.numberToMinDecimalsString(getNumber(100, 900));
        var phoneNum2 = MathUtilCore.numberToMinDecimalsString(getNumber(1000, 9000));
        return (phoneCode ?? "") + "-" + (phoneNum1 ?? "") + "-" + (phoneNum2 ?? "");
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

    static DateTime getDate() {
        var year = DateTime.now().year;
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

    static String getCountryFlag(String? country) {
        return "https://static.infragistics.com/xplatform/images/flags/" + (country ?? "") + ".png";
    }
}

class RealEstateData extends ArrayList<RealEstateDataItem?> {
    RealEstateData([int count = 100]) {
        const List<String> property = <String>["Townhouse", "Single", "Condo", "Villa"];
        const List<String> emails = <String>["estates.com", "remax.com", "zillow.com", "realtor.com", "coldwell.com"];
        const List<String> countries = <String>["USA", "UK", "France", "Canada", "Poland", "Japan", "Germany"];

        for (var i = 0; i < count; i++) {
            var year = RealEstateDataGenerator.getNumber(1950, 2015);
            var age = 2020 - year;
            var gender = RealEstateDataGenerator.getGender();
            var firstName = RealEstateDataGenerator.getNameFirst(gender);
            var lastName = RealEstateDataGenerator.getNameLast();
            var initials = firstName.substring(0, 1).toLowerCase();
            var email = initials + firstName.toLowerCase() + "@" + RealEstateDataGenerator.getItem(emails);
            var street = RealEstateDataGenerator.getStreet();
            var country = RealEstateDataGenerator.getItem(countries);
            var city = RealEstateDataGenerator.getCity(country);
            this.add((RealEstateDataItem()
                ..address = street
                ..age = age
                ..agent = firstName + " " + lastName
                ..area = RealEstateDataGenerator.getNumber(50, 300)
                ..baths = RealEstateDataGenerator.getNumber(1, 3)
                ..built = year
                ..city = city
                ..country = country
                ..countryFlag = RealEstateDataGenerator.getCountryFlag(country)
                ..email = email
                ..id = RealEstateDataGenerator.pad(i + 1001, 4)
                ..phone = RealEstateDataGenerator.getPhone()
                ..price = RealEstateDataGenerator.getNumber(210, 900) * 1000
                ..property = RealEstateDataGenerator.getItem(property)
                ..rooms = RealEstateDataGenerator.getNumber(2, 5)
                ..saleDate = RealEstateDataGenerator.getDate()
                ..street = street
            ));
        }
    }
}
//end data
