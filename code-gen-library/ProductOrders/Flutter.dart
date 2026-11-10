//begin data
import 'dart:math' as math;
import 'package:igniteui_flutter_core/src/ArrayList.dart' show ArrayList;
import 'package:igniteui_flutter_core/src/reflection.dart' show IReflectable, IReflectableSet;

// The keys stay as the C# and TypeScript spell them: a data item defined in
// code keeps its own casing across platforms, and these are the names the
// member paths in the descriptions ask for.
class ProductOrdersItem implements IReflectable, IReflectableSet {
    DateTime? orderDate = null;
    String? id = null;
    double productID = 0;
    String? productName = null;
    double productPrice = 0;
    double bundlePrice = 0;
    double margin = 0;
    double orderItems = 0;
    double orderValue = 0;
    double profit = 0;
    String? country = null;
    String? countryFlag = null;
    String? city = null;
    String? status = null;

    Object? getValue(String? propertyName) {
        switch (propertyName) {
            case "OrderDate":
                return this.orderDate;
            case "ID":
                return this.id;
            case "ProductID":
                return this.productID;
            case "ProductName":
                return this.productName;
            case "ProductPrice":
                return this.productPrice;
            case "BundlePrice":
                return this.bundlePrice;
            case "Margin":
                return this.margin;
            case "OrderItems":
                return this.orderItems;
            case "OrderValue":
                return this.orderValue;
            case "Profit":
                return this.profit;
            case "Country":
                return this.country;
            case "CountryFlag":
                return this.countryFlag;
            case "City":
                return this.city;
            case "Status":
                return this.status;
        }
        return null;
    }

    void setValue(String? propertyName, Object? value) {
        switch (propertyName) {
            case "OrderDate":
                this.orderDate = value as DateTime?;
                break;
            case "ID":
                this.id = value as String?;
                break;
            case "ProductID":
                this.productID = (value as num).toDouble();
                break;
            case "ProductName":
                this.productName = value as String?;
                break;
            case "ProductPrice":
                this.productPrice = (value as num).toDouble();
                break;
            case "BundlePrice":
                this.bundlePrice = (value as num).toDouble();
                break;
            case "Margin":
                this.margin = (value as num).toDouble();
                break;
            case "OrderItems":
                this.orderItems = (value as num).toDouble();
                break;
            case "OrderValue":
                this.orderValue = (value as num).toDouble();
                break;
            case "Profit":
                this.profit = (value as num).toDouble();
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
            case "Status":
                this.status = value as String?;
                break;
        }
    }
}

class ProductOrdersGenerator {
    static const List<String> citiesUS = <String>["New York", "Los Angeles", "Miami", "San Francisco", "San Diego", "Las Vegas"];
    static const List<String> citiesUK = <String>["London", "Liverpool", "Manchester"];
    static const List<String> citiesFR = <String>["Paris", "Marseille", "Lyon"];
    static const List<String> citiesCA = <String>["Toronto", "Vancouver", "Montreal"];
    static const List<String> citiesPL = <String>["Krakow", "Warsaw", "Wroclaw", "Gdansk"];
    static const List<String> citiesJP = <String>["Tokyo", "Osaka", "Kyoto", "Yokohama"];
    static const List<String> citiesGR = <String>["Berlin", "Bonn", "Cologne", "Munich", "Hamburg"];

    static math.Random rand = math.Random();

    static double getNumber(double min, double max) {
        return (min + (rand.nextDouble() * (max - min))).roundToDouble();
    }

    static int getInteger(double min, double max) {
        return getNumber(min, max).toInt();
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

class ProductOrders extends ArrayList<ProductOrdersItem?> {
    ProductOrders([int count = 100]) {
        const List<String> names = <String>[
            "Intel CPU", "AMD CPU",
            "Intel Motherboard", "AMD Motherboard", "NVIDIA Motherboard",
            "NVIDIA GPU", "GIGABYTE GPU", "Asus GPU", "AMD GPU", "MSI GPU",
            "Corsair Memory", "Patriot Memory", "Skill Memory",
            "Samsung HDD", "WD HDD", "Seagate HDD", "Intel HDD",
            "Samsung SSD", "WD SSD", "Seagate SSD", "Intel SSD",
            "Samsung Monitor", "Asus Monitor", "LG Monitor", "HP Monitor"];
        const List<String> countries = <String>["USA", "UK", "France", "Canada", "Poland", "Japan", "Germany"];
        const List<String> status = <String>["Packing", "Shipped", "Delivered"];

        for (var i = 0; i < count; i++) {
            var price = ProductOrdersGenerator.getNumber(100, 900);
            var items = ProductOrdersGenerator.getNumber(10, 80);
            var value = price * items;
            var margin = ProductOrdersGenerator.getNumber(3, 10);
            var profit = ((price * margin / 100) * items).roundToDouble();
            var country = ProductOrdersGenerator.getItem(countries);
            var city = ProductOrdersGenerator.getCity(country);

            this.add((ProductOrdersItem()
                ..id = ProductOrdersGenerator.pad(1001 + i, 4)
                ..productID = (1001 + i).toDouble()
                ..bundlePrice = price
                ..productPrice = price
                ..margin = margin
                ..orderDate = ProductOrdersGenerator.getDate()
                ..orderItems = items
                ..orderValue = value
                ..productName = ProductOrdersGenerator.getItem(names)
                ..profit = profit
                ..city = city
                ..country = country
                ..countryFlag = ProductOrdersGenerator.getCountryFlag(country)
                ..status = ProductOrdersGenerator.getItem(status)
            ));
        }
    }
}
//end data
