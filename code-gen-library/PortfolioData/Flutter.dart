//begin data
import 'dart:math' as math;
import 'package:igniteui_flutter_core/src/ArrayList.dart' show ArrayList;
import 'package:igniteui_flutter_core/src/reflection.dart' show IReflectable, IReflectableSet;

// The keys stay as the C# and TypeScript spell them: a data item defined in
// code keeps its own casing across platforms, and these are the names the
// member paths in the descriptions ask for.
class PortfolioDataRegion {
    String? name = null;
    List<String> countries = <String>[];
}

class PortfolioDataPriceChange {
    double newPrice = 0;
    double oldPrice = 0;
    double byAmount = 0;
    double percentage = 0;
}

class PortfolioDataItem implements IReflectable, IReflectableSet {
    double priceHeat = 0;
    String? indGroup = null;
    String? indSector = null;
    String? indCategory = null;
    String? fitch = null;
    String? collateral = null;
    String? transactions = null;
    double cpn = 0;
    double spread = 0;
    double krd3YR = 0;
    double krd5YR = 0;
    double krd1YR = 0;
    DateTime? maturity = null;
    int id = 0;
    String? settlement = null;
    String? category = null;
    String? contract = null;
    String? country = null;
    String? currency = null;
    String? type = null;
    double open = 0;
    double price = 0;
    double buy = 0;
    String? rating = null;
    String? region = null;
    String? risk = null;
    double sell = 0;
    String? sector = null;
    String? security = null;
    String? issuer = null;
    double change = 0;
    double changePercent = 0;
    double volume = 0;
    double dailyHigh = 0;
    double dailyLow = 0;
    double yearlyHigh = 0;
    double yearlyLow = 0;
    double yearlyStart = 0;
    double changeOnYear = 0;

    // MemberwiseClone has no Dart counterpart, so the copy is written out.
    PortfolioDataItem clone() {
        var c = PortfolioDataItem();
        c.priceHeat = this.priceHeat;
        c.indGroup = this.indGroup;
        c.indSector = this.indSector;
        c.indCategory = this.indCategory;
        c.fitch = this.fitch;
        c.collateral = this.collateral;
        c.transactions = this.transactions;
        c.cpn = this.cpn;
        c.spread = this.spread;
        c.krd3YR = this.krd3YR;
        c.krd5YR = this.krd5YR;
        c.krd1YR = this.krd1YR;
        c.maturity = this.maturity;
        c.id = this.id;
        c.settlement = this.settlement;
        c.category = this.category;
        c.contract = this.contract;
        c.country = this.country;
        c.currency = this.currency;
        c.type = this.type;
        c.open = this.open;
        c.price = this.price;
        c.buy = this.buy;
        c.rating = this.rating;
        c.region = this.region;
        c.risk = this.risk;
        c.sell = this.sell;
        c.sector = this.sector;
        c.security = this.security;
        c.issuer = this.issuer;
        c.change = this.change;
        c.changePercent = this.changePercent;
        c.volume = this.volume;
        c.dailyHigh = this.dailyHigh;
        c.dailyLow = this.dailyLow;
        c.yearlyHigh = this.yearlyHigh;
        c.yearlyLow = this.yearlyLow;
        c.yearlyStart = this.yearlyStart;
        c.changeOnYear = this.changeOnYear;
        return c;
    }

    Object? getValue(String? propertyName) {
        switch (propertyName) {
            case "PriceHeat":
                return this.priceHeat;
            case "IndGroup":
                return this.indGroup;
            case "IndSector":
                return this.indSector;
            case "IndCategory":
                return this.indCategory;
            case "Fitch":
                return this.fitch;
            case "Collateral":
                return this.collateral;
            case "Transactions":
                return this.transactions;
            case "CPN":
                return this.cpn;
            case "Spread":
                return this.spread;
            case "KRD_3YR":
                return this.krd3YR;
            case "KRD_5YR":
                return this.krd5YR;
            case "KRD_1YR":
                return this.krd1YR;
            case "Maturity":
                return this.maturity;
            case "ID":
                return this.id;
            case "Settlement":
                return this.settlement;
            case "Category":
                return this.category;
            case "Contract":
                return this.contract;
            case "Country":
                return this.country;
            case "Currency":
                return this.currency;
            case "Type":
                return this.type;
            case "Open":
                return this.open;
            case "Price":
                return this.price;
            case "Buy":
                return this.buy;
            case "Rating":
                return this.rating;
            case "Region":
                return this.region;
            case "Risk":
                return this.risk;
            case "Sell":
                return this.sell;
            case "Sector":
                return this.sector;
            case "Security":
                return this.security;
            case "Issuer":
                return this.issuer;
            case "Change":
                return this.change;
            case "ChangePercent":
                return this.changePercent;
            case "Volume":
                return this.volume;
            case "DailyHigh":
                return this.dailyHigh;
            case "DailyLow":
                return this.dailyLow;
            case "YearlyHigh":
                return this.yearlyHigh;
            case "YearlyLow":
                return this.yearlyLow;
            case "YearlyStart":
                return this.yearlyStart;
            case "ChangeOnYear":
                return this.changeOnYear;
        }
        return null;
    }

    void setValue(String? propertyName, Object? value) {
        switch (propertyName) {
            case "PriceHeat":
                this.priceHeat = (value as num).toDouble();
                break;
            case "IndGroup":
                this.indGroup = value as String?;
                break;
            case "IndSector":
                this.indSector = value as String?;
                break;
            case "IndCategory":
                this.indCategory = value as String?;
                break;
            case "Fitch":
                this.fitch = value as String?;
                break;
            case "Collateral":
                this.collateral = value as String?;
                break;
            case "Transactions":
                this.transactions = value as String?;
                break;
            case "CPN":
                this.cpn = (value as num).toDouble();
                break;
            case "Spread":
                this.spread = (value as num).toDouble();
                break;
            case "KRD_3YR":
                this.krd3YR = (value as num).toDouble();
                break;
            case "KRD_5YR":
                this.krd5YR = (value as num).toDouble();
                break;
            case "KRD_1YR":
                this.krd1YR = (value as num).toDouble();
                break;
            case "Maturity":
                this.maturity = value as DateTime?;
                break;
            case "ID":
                this.id = (value as num).toInt();
                break;
            case "Settlement":
                this.settlement = value as String?;
                break;
            case "Category":
                this.category = value as String?;
                break;
            case "Contract":
                this.contract = value as String?;
                break;
            case "Country":
                this.country = value as String?;
                break;
            case "Currency":
                this.currency = value as String?;
                break;
            case "Type":
                this.type = value as String?;
                break;
            case "Open":
                this.open = (value as num).toDouble();
                break;
            case "Price":
                this.price = (value as num).toDouble();
                break;
            case "Buy":
                this.buy = (value as num).toDouble();
                break;
            case "Rating":
                this.rating = value as String?;
                break;
            case "Region":
                this.region = value as String?;
                break;
            case "Risk":
                this.risk = value as String?;
                break;
            case "Sell":
                this.sell = (value as num).toDouble();
                break;
            case "Sector":
                this.sector = value as String?;
                break;
            case "Security":
                this.security = value as String?;
                break;
            case "Issuer":
                this.issuer = value as String?;
                break;
            case "Change":
                this.change = (value as num).toDouble();
                break;
            case "ChangePercent":
                this.changePercent = (value as num).toDouble();
                break;
            case "Volume":
                this.volume = (value as num).toDouble();
                break;
            case "DailyHigh":
                this.dailyHigh = (value as num).toDouble();
                break;
            case "DailyLow":
                this.dailyLow = (value as num).toDouble();
                break;
            case "YearlyHigh":
                this.yearlyHigh = (value as num).toDouble();
                break;
            case "YearlyLow":
                this.yearlyLow = (value as num).toDouble();
                break;
            case "YearlyStart":
                this.yearlyStart = (value as num).toDouble();
                break;
            case "ChangeOnYear":
                this.changeOnYear = (value as num).toDouble();
                break;
        }
    }
}

class PortfolioDataRandomizer {
    static math.Random rand = math.Random();

    static DateTime getDate() {
        var year = DateTime.now().year;
        var month = getInteger(10, 12);
        var day = getInteger(10, 25);
        return DateTime(year, month, day);
    }

    static Object? getItem(List<Object?> list) {
        var index = getInteger(0, (list.length - 1).toDouble());
        return list[index];
    }

    static double getNumber(double min, double max) {
        return (min + (rand.nextDouble() * (max - min))).roundToDouble();
    }

    static int getInteger(double min, double max) {
        return getNumber(min, max).toInt();
    }

    static PortfolioDataPriceChange getPriceChange(double oldPrice) {
        // C# rounds the draw to two decimals by formatting it and parsing back.
        var rnd = double.parse(rand.nextDouble().toStringAsFixed(2));
        var volatility = 2;
        var changePercent = 2 * volatility * rnd;
        if (changePercent > volatility) {
            changePercent -= (2 * volatility);
        }
        var changeAmount = oldPrice * (changePercent / 100);
        var newPrice = oldPrice + changeAmount;
        return (PortfolioDataPriceChange()
            ..byAmount = changeAmount
            ..newPrice = (newPrice * 100).roundToDouble() / 100
            ..oldPrice = (oldPrice * 100).roundToDouble() / 100
            ..percentage = (changePercent * 100).roundToDouble() / 100
        );
    }
}

class PortfolioData extends ArrayList<PortfolioDataItem?> {
    static List<String> dealType = <String>["Buy", "Sell"];
    static List<String> contracts = <String>["Forwards", "Futures", "Options", "Swap", "CFD"];
    static List<String> settlements = <String>["Credit", "Cash", "Loan"];
    static List<String> sectorTypes = <String>["Public", "Private", "Government"];
    static List<String> currencyTypes = <String>["USD", "EUR", "PLN", "GBP", "YEN"];
    static List<String> countryRisks = <String>["Low", "High"];
    static List<String> securityTypes = <String>["Poor", "Good", "High"];
    static List<String> issuerNames = <String>["American Airlines", "Delta Airlines", "Southwest", "FedEx"];
    static List<String> ratingTypes = <String>["AAA", "BBB", "CCC"];

    PortfolioData([int count = 500]) {
        var dataItems = getDataItems();
        var defaultItem = getDefaultData();
        var regions = getRegions();
        for (var i = 0; i < count; i++) {
            var r = (PortfolioDataRandomizer.rand.nextDouble() * dataItems.length).floor();
            var region = PortfolioDataRandomizer.getItem(regions) as PortfolioDataRegion;
            var item = dataItems[r].clone();
            item.region = region.name;
            item.settlement = PortfolioDataRandomizer.getItem(settlements) as String?;
            item.contract = PortfolioDataRandomizer.getItem(contracts) as String?;
            item.country = PortfolioDataRandomizer.getItem(region.countries) as String?;
            item.risk = PortfolioDataRandomizer.getItem(countryRisks) as String?;
            item.sector = PortfolioDataRandomizer.getItem(sectorTypes) as String?;
            item.currency = PortfolioDataRandomizer.getItem(currencyTypes) as String?;
            item.security = PortfolioDataRandomizer.getItem(securityTypes) as String?;
            item.issuer = PortfolioDataRandomizer.getItem(issuerNames) as String?;
            item.maturity = PortfolioDataRandomizer.getDate();
            item.rating = PortfolioDataRandomizer.getItem(ratingTypes) as String?;
            item.indGroup = defaultItem.indGroup;
            item.indSector = defaultItem.indSector;
            item.indCategory = defaultItem.indCategory;
            item.fitch = defaultItem.fitch;
            item.collateral = defaultItem.collateral;
            item.transactions = defaultItem.transactions;
            item.spread = defaultItem.spread;
            item.krd1YR = defaultItem.krd1YR;
            item.krd3YR = defaultItem.krd3YR;
            item.krd5YR = defaultItem.krd5YR;
            item.id = i;
            randomizeDataValues(item);
            this.add(item);
        }
    }

    static PortfolioDataItem getDefaultData() {
        return (PortfolioDataItem()
            ..indGroup = "Airlines"
            ..indSector = "Consumer, Cyclical"
            ..indCategory = "Airlines"
            ..fitch = "N.A."
            ..collateral = "Assets"
            ..transactions = "1765866"
            ..cpn = 7.875
            ..maturity = DateTime(2022, 1, 1)
            ..spread = 28.302
            ..krd3YR = 0.00006
            ..krd5YR = 0
            ..krd1YR = -0.00187
        );
    }

    static List<PortfolioDataRegion> getRegions() {
        return <PortfolioDataRegion>[
            (PortfolioDataRegion()..name = "North America"..countries = <String>["Canada", "United States", "Mexico"]),
            (PortfolioDataRegion()..name = "Middle East"..countries = <String>["Turkey", "Iraq", "Saudi Arabia", "Syria", "UAE", "Israel", "Jordan", "Lebanon", "Oman", "Kuwait", "Qatar", "Bahrain", "Iran"]),
            (PortfolioDataRegion()..name = "Europe"..countries = <String>["Russia", "Germany", "France", "United Kingdom", "Italy", "Spain", "Poland", "Romania", "Netherlands", "Belgium", "Greece", "Portugal", "Czechia", "Hungary", "Sweden", "Austria", "Switzerland", "Bulgaria", "Denmark", "Finland", "Slovakia", "Norway", "Ireland", "Croatia", "Slovenia", "Estonia", "Iceland"]),
            (PortfolioDataRegion()..name = "Africa"..countries = <String>["Nigeria", "Ethiopia", "Egypt", "South Africa", "Algeria", "Morocco", "Cameroon", "Niger", "Senegal", "Tunisia", "Libya"]),
            (PortfolioDataRegion()..name = "Asia Pacific"..countries = <String>["Afghanistan", "Australia", "Azerbaijan", "China", "Hong Kong", "India", "Indonesia", "Japan", "Malaysia", "New Zealand", "Pakistan", "Philippines", "Korea", "Singapore", "Taiwan", "Thailand"]),
            (PortfolioDataRegion()..name = "South America"..countries = <String>["Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Ecuador", "Guyana", "Paraguay", "Peru", "Suriname", "Uruguay", "Venezuela"]),
        ];
    }

    // The literal rows all carry the same sixteen fields in the same order, so
    // they read as calls rather than as repeated initialisers.
    static PortfolioDataItem _item(String category, String type, double spread, double open, double price, double buy, double sell, double change, double changePercent, double volume, double dailyHigh, double dailyLow, double yearlyHigh, double yearlyLow, double yearlyStart, double changeOnYear) {
        return (PortfolioDataItem()
            ..category = category
            ..type = type
            ..spread = spread
            ..open = open
            ..price = price
            ..buy = buy
            ..sell = sell
            ..change = change
            ..changePercent = changePercent
            ..volume = volume
            ..dailyHigh = dailyHigh
            ..dailyLow = dailyLow
            ..yearlyHigh = yearlyHigh
            ..yearlyLow = yearlyLow
            ..yearlyStart = yearlyStart
            ..changeOnYear = changeOnYear
        );
    }

    static List<PortfolioDataItem> getDataItems() {
        return <PortfolioDataItem>[
            _item("Metal", "Gold",       0.01,  1281.10,  1280.7317, 1280.7267, 1280.7367, -0.3683, -0.0287, 48387,  1289.50,  1279.10,  1306,    1047.20, 1176.60, 8.8502),
            _item("Metal", "Silver",     0.01,  17.43,    17.42,     17.43,     17.43,     -0.01,   -0.0287, 48387,  1289.50,  1279.10,  1306,    1047.20, 1176.60, 8.8502),
            _item("Metal", "Copper",     0.02,  2.123,    2.113,     2.123,     2.123,     -0.01,   -0.471,  28819,  2.16,     2.11,     2.94,    1.96,    2.45,    -13.7551),
            _item("Metal", "Platinum",   0.01,  1071.60,  1071.0993, 1071.0943, 1071.1043, -0.5007, -0.0467, 3039,   1081.20,  1070.50,  1120.60, 812.40,  966.50,  10.8225),
            _item("Metal", "Palladium",  0.01,  600.55,   601.0005,  600.9955,  601.0055,  0.4505,  0.075,   651,    607.20,   598.40,   690,     458.6,   574.3,   4.6492),
            _item("Oil",   "Oil",        0.015, 45.54,    45.7899,   45.7824,   45.7974,   0.2499,  0.5487,  107196, 45.94,    45.00,    65.28,   30.79,   48.035,  -4.6739),
            _item("Oil",   "Brent",      0.01,  46.06,    46.05,     46.06,     46.06,     -0.01,   -0.0217, 59818,  46.48,    45.60,    71.14,   30.02,   50.58,   -8.9561),
            _item("Oil",   "Natural Gas",0.02,  2.094,    2.104,     2.094,     2.094,     0.01,    0.4776,  2783,   2.11,     2.09,     3.20,    1.84,    2.52,    -16.5079),
            _item("Oil",   "Gas",        0.015, 1.5086,   1.9532,    1.9457,    1.9607,    0.4446,  29.4686, 2646,   1.9532,   1.50,     2.05,    1.15,    1.60,    22.0727),
            _item("Oil",   "Diesel",     0.015, 1.3474,   1.3574,    1.3474,    1.3474,    0.01,    0.7422,  2971,   1.36,     1.34,     2.11,    0.92,    1.515,   -10.4026),
            _item("Oil",   "Ethanol",    0.01,  1.512,    2.7538,    2.7488,    2.7588,    1.2418,  82.1323, 14,     2.7538,   1.1168,   2.7538,  1.1168,  1.475,   86.7011),
            _item("Oil",   "Crude",      0.02,  27.55,    27.58,     27.55,     27.55,     0.03,    0.1089,  1200,   27.55,    27.55,    29.32,   21.28,   25.30,   9.0119),
            _item("Oil",   "Coal",       0.015, 0.4363,   0.4163,    0.4363,    0.4363,    -0.02,   -4.584,  300,    0.4363,   0.4363,   0.4841,  0.3954,  0.4398,  -5.3326),
            _item("Agriculture", "Wheat",   0.01, 465.50,  465.52,    465.50,    465.50,    0.02,    0.0043,  4318,  467.00,  463.25,  628.50, 449.50, 539.00, -13.6327),
            _item("Agriculture", "Corn",    0.01, 379.50,  379.8026,  379.7976,  379.8076,  0.3026,  0.0797,  11266, 381.00,  377.75,  471.25, 351.25, 411.25, -7.6468),
            _item("Agriculture", "Sugar",   0.01, 15.68,   14.6742,   14.6692,   14.6792,   -1.0058, -6.4146, 4949,  15.70,   14.6742, 16.87,  11.37,  14.12,  3.9249),
            _item("Agriculture", "Soybean", 0.01, 1038.00, 1038.6171, 1038.6121, 1038.6221, 0.6171,  0.0595,  20356, 1044.00, 1031.75, 1057.00,859.50, 958.25, 8.3869),
            _item("Agriculture", "Soy oil", 0.01, 33.26,   33.7712,   33.7662,   33.7762,   0.5112,  1.5371,  10592, 33.7712, 33.06,   35.43,  26.61,  31.02,  8.8692),
            _item("Agriculture", "Soy Meat",0.01, 342.60,  342.62,    342.60,    342.60,    0.02,    0.0058,  5646,  345.40,  340.30,  353.40, 261.70, 307.55, 11.403),
            _item("Agriculture", "OJ Future",0.01,140.60,  140.1893,  140.1843,  140.1943,  -0.4107, -0.2921, 7000,  140.1893,0.00,    155.95, 113.00, 134.475,4.2493),
            _item("Agriculture", "Coffee",  0.01, 125.70,  125.69,    125.70,    125.70,    -0.01,   -0.008,  1654,  125.80,  125.00,  155.75, 115.35, 135.55, -7.2741),
            _item("Agriculture", "Cocoa",   0.01, 3076.00, 3076.03,   3076.00,   3076.00,   0.03,    0.001,   978,   3078.00, 3066.00, 3406.00,2746.00,3076.00,0.001),
            _item("Agriculture", "Rice",    0.01, 11.245,  10.4154,   10.4104,   10.4204,   -0.8296, -7.3779, 220,   11.38,   10.4154, 14.14,  9.70,   11.92,  -12.6228),
            _item("Agriculture", "Oats",    0.01, 194.50,  194.2178,  194.2128,  194.2228,  -0.2822, -0.1451, 640,   195.75,  194.00,  241.25, 183.75, 212.50, -8.6034),
            _item("Agriculture", "Milk",    0.01, 12.87,   12.86,     12.87,     12.87,     -0.01,   -0.0777, 7000,  12.89,   12.81,   16.96,  12.81,  14.885, -13.6043),
            _item("Agriculture", "Cotton",  0.01, 61.77,   61.76,     61.77,     61.77,     -0.01,   -0.0162, 3612,  62.06,   61.32,   67.59,  54.33,  60.96,  1.3123),
            _item("Agriculture", "Lumber",  0.01, 303.90,  304.5994,  304.5944,  304.6044,  0.6994,  0.2302,  200,   304.5994,303.90,  317.10, 236.00, 276.55, 10.1426),
            _item("Livestock", "LV Cattle", 0.01, 120.725, 120.705,   120.725,   120.725,   -0.02,   -0.0166, 4000,  120.725, 120.725, 147.98, 113.90, 130.94, -7.8166),
            _item("Livestock", "FD Cattle", 0.01, 147.175, 148.6065,  148.6015,  148.6115,  1.4315,  0.9727,  500,   148.6065,147.175, 190.00, 138.10, 164.05, -9.4139),
            _item("Livestock", "Lean Hogs", 0.01, 81.275,  81.8146,   81.8096,   81.8196,   0.5396,  0.664,   1000,  81.8146, 81.275,  83.98,  70.25,  77.115, 6.0943),
            _item("Currencies", "USD IDX Future",  0.02, 93.88,    93.7719,    93.7619,    93.7819,    -0.1081, -0.1151, 5788,  94.05,    93.7534,  100.70,  91.88,    96.29,    -2.6151),
            _item("Currencies", "USD/JPY Future",  0.02, 9275.50,  9277.3342,  9277.3242,  9277.3442,  1.8342,  0.0198,  47734, 9277.3342,0.93,     9483.00, 0.93,     4741.965, 95.6432),
            _item("Currencies", "GBP/USD Future",  0.02, 1.4464,   1.1941,     1.1841,     1.2041,     -0.2523, -17.4441,29450, 1.45,     1.1941,   1.59,    1.1941,   1.485,    -19.59),
            _item("Currencies", "AUD/USD Future",  0.02, 0.7344,   0.7444,     0.7344,     0.7344,     0.01,    1.3617,  36764, 0.74,     0.73,     0.79,    0.68,     0.735,    1.2789),
            _item("Currencies", "USD/CAD Future",  0.02, 0.7744,   0.9545,     0.9445,     0.9645,     0.1801,  23.2622, 13669, 0.9545,   0.77,     0.9545,  0.68,     0.755,    26.4295),
            _item("Currencies", "USD/CHF Future",  0.02, 1.0337,   1.0437,     1.0337,     1.0337,     0.01,    0.9674,  5550,  1.03,     1.03,     1.11,    0.98,     1.045,    -0.1244),
            _item("Index", "DOW Future",   0.01, 17711.00,17712.1515, 17712.1465, 17712.1565, 1.1515,  0.0065,  22236, 17727.00, 17642.00, 18083.00,15299.00, 16691.00, 6.118),
            _item("Index", "S&P Future",   0.01, 2057.50, 2056.6018,  2056.5968,  2056.6068,  -0.8982, -0.0437, 142780,2059.50,  2049.00,  2105.50, 1794.50,  1950.00,  5.4668),
            _item("Index", "NAS Future",   0.01, 4341.25, 4341.28,    4341.25,    4341.25,    0.03,    0.0007,  18259, 4347.00,  4318.00,  4719.75, 3867.75,  4293.75,  1.107),
            _item("Index", "S&P MID MINI", 0.01, 1454.30, 1455.7812,  1455.7762,  1455.7862,  1.4812,  0.1018,  3380,  1455.7812,1448.00,  1527.30, 1236.00,  1381.65,  5.3654),
            _item("Index", "S&P 600 MINI", 0.01, 687.90,  687.88,     687.90,     687.90,     -0.02,   -0.0029, 3340,  0.00,     0.00,     620.32,  595.90,   608.11,   13.1177),
            _item("Interest Rate", "US 30YR Future",  0.01, 164.875,  164.1582,  164.1532,  164.1632, -0.7168, -0.4347, 28012, 165.25,  164.0385, 169.38, 151.47, 160.425, 2.3271),
            _item("Interest Rate", "US 2Y Future",   0.01, 109.3984, 109.3884,  109.3984,  109.3984, -0.01,   -0.0091, 17742, 109.41,  109.38,   109.80, 108.62, 109.21,  0.1634),
            _item("Interest Rate", "US 10YR Future",  0.01, 130.5625, 130.5825,  130.5625,  130.5625, 0.02,    0.0153,  189310,130.63,  130.44,   132.64, 125.48, 129.06,  1.1797),
            _item("Interest Rate", "Euro\$ 3M",       0.01, 99.18,    99.17,     99.18,     99.18,    -0.01,   -0.0101, 29509, 99.18,   99.17,    99.38,  98.41,  98.895,  0.2781),
        ];
    }

    static void randomizeDataValues(PortfolioDataItem item) {
        var priceChange = PortfolioDataRandomizer.getPriceChange(item.price);
        item.change = priceChange.byAmount;
        item.price = priceChange.newPrice;
        item.changePercent = priceChange.percentage;
    }
}
//end data
