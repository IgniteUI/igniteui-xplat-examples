//begin data
import 'dart:math' as math;
import 'package:igniteui_flutter_core/src/ArrayList.dart' show ArrayList;
import 'package:igniteui_flutter_core/src/reflection.dart' show IReflectable, IReflectableSet;

// The keys stay as the C# and TypeScript spell them: a data item defined in
// code keeps its own casing across platforms, and these are the names the
// member paths in the descriptions ask for.

/// One week of the order history a sparkline draws.
class ProductWeeklySale implements IReflectable, IReflectableSet {
    double sold = 0;
    double week = 0;

    Object? getValue(String? propertyName) {
        switch (propertyName) {
            case "Sold":
                return this.sold;
            case "Week":
                return this.week;
        }
        return null;
    }

    void setValue(String? propertyName, Object? value) {
        switch (propertyName) {
            case "Sold":
                this.sold = (value as num).toDouble();
                break;
            case "Week":
                this.week = (value as num).toDouble();
                break;
        }
    }
}

/// One week of the return rate, which runs either side of zero.
class ProductWeeklyBalance implements IReflectable, IReflectableSet {
    double balance = 0;
    double week = 0;

    Object? getValue(String? propertyName) {
        switch (propertyName) {
            case "Balance":
                return this.balance;
            case "Week":
                return this.week;
        }
        return null;
    }

    void setValue(String? propertyName, Object? value) {
        switch (propertyName) {
            case "Balance":
                this.balance = (value as num).toDouble();
                break;
            case "Week":
                this.week = (value as num).toDouble();
                break;
        }
    }
}

class ProductWithHistory implements IReflectable, IReflectableSet {
    String? countryFlag = null;
    String? countryName = null;
    double margin = 0;
    double orderCount = 0;
    ArrayList<ProductWeeklySale?>? orderHistory = null;
    double orderShipped = 0;
    double orderValue = 0;
    DateTime? orderDate = null;
    String? productID = null;
    String? productName = null;
    double productPrice = 0;
    double profit = 0;
    ArrayList<ProductWeeklyBalance?>? returnRate = null;
    String? status = null;

    Object? getValue(String? propertyName) {
        switch (propertyName) {
            case "CountryFlag":
                return this.countryFlag;
            case "CountryName":
                return this.countryName;
            case "Margin":
                return this.margin;
            case "OrderCount":
                return this.orderCount;
            case "OrderHistory":
                return this.orderHistory;
            case "OrderShipped":
                return this.orderShipped;
            case "OrderValue":
                return this.orderValue;
            case "OrderDate":
                return this.orderDate;
            case "ProductID":
                return this.productID;
            case "ProductName":
                return this.productName;
            case "ProductPrice":
                return this.productPrice;
            case "Profit":
                return this.profit;
            case "ReturnRate":
                return this.returnRate;
            case "Status":
                return this.status;
        }
        return null;
    }

    void setValue(String? propertyName, Object? value) {
        switch (propertyName) {
            case "CountryFlag":
                this.countryFlag = value as String?;
                break;
            case "CountryName":
                this.countryName = value as String?;
                break;
            case "Margin":
                this.margin = (value as num).toDouble();
                break;
            case "OrderCount":
                this.orderCount = (value as num).toDouble();
                break;
            case "OrderHistory":
                this.orderHistory = value as ArrayList<ProductWeeklySale?>?;
                break;
            case "OrderShipped":
                this.orderShipped = (value as num).toDouble();
                break;
            case "OrderValue":
                this.orderValue = (value as num).toDouble();
                break;
            case "OrderDate":
                this.orderDate = value as DateTime?;
                break;
            case "ProductID":
                this.productID = value as String?;
                break;
            case "ProductName":
                this.productName = value as String?;
                break;
            case "ProductPrice":
                this.productPrice = (value as num).toDouble();
                break;
            case "Profit":
                this.profit = (value as num).toDouble();
                break;
            case "ReturnRate":
                this.returnRate = value as ArrayList<ProductWeeklyBalance?>?;
                break;
            case "Status":
                this.status = value as String?;
                break;
        }
    }
}

class ProductsWithHistoryGenerator {
    static math.Random _random = math.Random();

    static List<String> names = <String>[
        "Intel CPU", "AMD CPU",
        "Nvidia GPU", "Gigabyte GPU", "Asus GPU", "AMD GPU", "MSI GPU",
        "Corsair Memory", "Patriot Memory", "Skill Memory",
        "Samsung HDD", "WD HDD", "Seagate HDD", "Intel HDD", "Asus HDD",
        "Samsung SSD", "WD SSD", "Seagate SSD", "Intel SSD", "Asus SSD",
        "Samsung Monitor", "Asus Monitor", "LG Monitor", "HP Monitor"
    ];

    static List<String> countries = <String>[
        "United-States", "United-Kingdom", "France", "Canada", "Poland",
        "Denmark", "Croatia", "Australia", "Seychelles",
        "Sweden", "Germany", "Japan", "Ireland",
        "Barbados", "Jamaica", "Cuba", "Spain"
    ];

    static List<String> statuses = <String>["Packing", "Shipped", "Delivered"];

    static ArrayList<ProductWeeklySale?> getOrderHistory(int weekCount) {
        var sales = ArrayList<ProductWeeklySale?>();
        for (var w = 0; w < weekCount; w++) {
            sales.add((ProductWeeklySale()
                ..sold = getNumber(0, 100)
                ..week = w.toDouble()
            ));
        }
        return sales;
    }

    static ArrayList<ProductWeeklyBalance?> getReturnRate(int weekCount) {
        var rates = ArrayList<ProductWeeklyBalance?>();
        for (var w = 0; w < weekCount; w++) {
            rates.add((ProductWeeklyBalance()
                ..balance = getNumber(-100, 100)
                ..week = w.toDouble()
            ));
        }
        return rates;
    }

    static DateTime getDate() {
        var today = DateTime.now();
        return DateTime(today.year, getNumber(1, 9).toInt(), getNumber(10, 27).toInt());
    }

    static double getNumber(double min, double max) {
        return (min + _random.nextDouble() * (max - min)).roundToDouble();
    }

    static String getItem(List<String> items) {
        return items[getNumber(0, (items.length - 1).toDouble()).toInt()];
    }

    static String pad(int num, int size) {
        return num.toString().padLeft(size, "0");
    }
}

class ProductsWithHistory extends ArrayList<ProductWithHistory?> {
    ProductsWithHistory([int count = 20]) {
        for (var i = 0; i < count; i++) {
            var price = ProductsWithHistoryGenerator.getNumber(10000, 90000) / 100.0;
            var orderCount = ProductsWithHistoryGenerator.getNumber(4, 30);
            var orderValue = (price * orderCount).roundToDouble();
            var margin = ProductsWithHistoryGenerator.getNumber(5, 10);
            var country = ProductsWithHistoryGenerator.getItem(ProductsWithHistoryGenerator.countries);
            this.add((ProductWithHistory()
                ..countryFlag = "https://dl.infragistics.com/x/img/flags/" + country + ".png"
                ..countryName = country
                ..margin = margin
                ..orderCount = orderCount
                // data source for the embedded sparkline
                ..orderHistory = ProductsWithHistoryGenerator.getOrderHistory(26)
                ..orderShipped = ProductsWithHistoryGenerator.getNumber(30, 100)
                ..orderValue = orderValue
                ..orderDate = ProductsWithHistoryGenerator.getDate()
                ..productID = ProductsWithHistoryGenerator.pad(count - i, count.toString().length)
                ..productName = ProductsWithHistoryGenerator.getItem(ProductsWithHistoryGenerator.names)
                ..productPrice = price
                ..profit = (orderValue * (margin / 100.0)).roundToDouble()
                ..returnRate = ProductsWithHistoryGenerator.getReturnRate(52)
                ..status = ProductsWithHistoryGenerator.getItem(ProductsWithHistoryGenerator.statuses)
            ));
        }
    }
}
//end data
