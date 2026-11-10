//begin async data
import 'dart:async';
import 'dart:convert';
import 'dart:io';
import 'package:igniteui_flutter_core/src/ArrayList.dart' show ArrayList;
import 'package:igniteui_flutter_core/src/reflection.dart' show IReflectable, IReflectableSet;

// The keys stay as the C# and TypeScript spell them: a data item defined in
// code keeps its own casing across platforms, and these are the names the
// member paths in the descriptions ask for. Here they are also the keys the
// fetched JSON carries, so the two line up.
class FinancialDataDetails implements IReflectable, IReflectableSet {
    String? category = null;
    String? type = null;
    double spread = 0;
    double open = 0;
    double price = 0;
    double buy = 0;
    double sell = 0;
    double change = 0;
    double changePercent = 0;
    double volume = 0;
    double high = 0;
    double low = 0;
    double yearlyHigh = 0;
    double yearlyLow = 0;
    double yearlyStart = 0;
    double yearlyChange = 0;
    String? settlement = null;
    String? contract = null;
    String? region = null;
    String? country = null;
    String? risk = null;
    String? sector = null;
    String? currency = null;
    String? security = null;
    String? issuer = null;
    String? maturity = null;
    String? indGroup = null;
    String? indSector = null;
    String? indCategory = null;
    String? cpnTyp = null;
    String? cpn = null;
    double krd3YR = 0;
    double krd5YR = 0;
    double krd1YR = 0;
    double zvSpread = 0;
    double id = 0;

    Object? getValue(String? propertyName) {
        switch (propertyName) {
            case "Category":
                return this.category;
            case "Type":
                return this.type;
            case "Spread":
                return this.spread;
            case "Open":
                return this.open;
            case "Price":
                return this.price;
            case "Buy":
                return this.buy;
            case "Sell":
                return this.sell;
            case "Change":
                return this.change;
            case "ChangePercent":
                return this.changePercent;
            case "Volume":
                return this.volume;
            case "High":
                return this.high;
            case "Low":
                return this.low;
            case "YearlyHigh":
                return this.yearlyHigh;
            case "YearlyLow":
                return this.yearlyLow;
            case "YearlyStart":
                return this.yearlyStart;
            case "YearlyChange":
                return this.yearlyChange;
            case "Settlement":
                return this.settlement;
            case "Contract":
                return this.contract;
            case "Region":
                return this.region;
            case "Country":
                return this.country;
            case "Risk":
                return this.risk;
            case "Sector":
                return this.sector;
            case "Currency":
                return this.currency;
            case "Security":
                return this.security;
            case "Issuer":
                return this.issuer;
            case "Maturity":
                return this.maturity;
            case "IndGroup":
                return this.indGroup;
            case "IndSector":
                return this.indSector;
            case "IndCategory":
                return this.indCategory;
            case "CpnTyp":
                return this.cpnTyp;
            case "Cpn":
                return this.cpn;
            case "KRD_3YR":
                return this.krd3YR;
            case "KRD_5YR":
                return this.krd5YR;
            case "KRD_1YR":
                return this.krd1YR;
            case "ZV_SPREAD":
                return this.zvSpread;
            case "ID":
                return this.id;
        }
        return null;
    }

    void setValue(String? propertyName, Object? value) {
        switch (propertyName) {
            case "Category":
                this.category = value as String?;
                break;
            case "Type":
                this.type = value as String?;
                break;
            case "Spread":
                this.spread = (value as num).toDouble();
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
            case "Sell":
                this.sell = (value as num).toDouble();
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
            case "High":
                this.high = (value as num).toDouble();
                break;
            case "Low":
                this.low = (value as num).toDouble();
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
            case "YearlyChange":
                this.yearlyChange = (value as num).toDouble();
                break;
            case "Settlement":
                this.settlement = value as String?;
                break;
            case "Contract":
                this.contract = value as String?;
                break;
            case "Region":
                this.region = value as String?;
                break;
            case "Country":
                this.country = value as String?;
                break;
            case "Risk":
                this.risk = value as String?;
                break;
            case "Sector":
                this.sector = value as String?;
                break;
            case "Currency":
                this.currency = value as String?;
                break;
            case "Security":
                this.security = value as String?;
                break;
            case "Issuer":
                this.issuer = value as String?;
                break;
            case "Maturity":
                this.maturity = value as String?;
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
            case "CpnTyp":
                this.cpnTyp = value as String?;
                break;
            case "Cpn":
                this.cpn = value as String?;
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
            case "ZV_SPREAD":
                this.zvSpread = (value as num).toDouble();
                break;
            case "ID":
                this.id = (value as num).toDouble();
                break;
        }
    }
}

class FinancialDataService extends ArrayList<FinancialDataDetails?> {
    // HttpClient out of dart:io rather than a package: the emitted library
    // depends on the product packages and intl, and nothing else, and the
    // Flutter host this serves is a desktop app.
    static Future<FinancialDataService> fetchData() async {
        var url = "https://static.infragistics.com/xplatform/data/stocks/FinancialData1000.json";
        var client = HttpClient();
        try {
            var request = await client.getUrl(Uri.parse(url));
            var response = await request.close();
            var str = await response.transform(utf8.decoder).join();
            var json = jsonDecode(str) as List<dynamic>;
            return convertData(json);
        } finally {
            client.close();
        }
    }

    static FinancialDataService convertData(List<dynamic> arr) {
        var ret = FinancialDataService();
        for (var entry in arr) {
            var json = entry as Map<String, dynamic>;
            var item = FinancialDataDetails();
            item.category = _str(json, "Category");
            item.type = _str(json, "Type");
            item.contract = _str(json, "Contract");
            item.settlement = _str(json, "Settlement");
            item.region = _str(json, "Region");
            item.country = _str(json, "Country");
            item.risk = _str(json, "Risk");
            item.sector = _str(json, "Sector");
            item.issuer = _str(json, "Issuer");
            item.maturity = _str(json, "Maturity");
            item.indGroup = _str(json, "IndGroup");
            item.indSector = _str(json, "IndSector");
            item.indCategory = _str(json, "IndCategory");
            item.cpnTyp = _str(json, "CpnTyp");
            item.cpn = _str(json, "Cpn");
            item.spread = _num(json, "Spread");
            item.open = _num(json, "Open");
            item.price = _num(json, "Price");
            item.buy = _num(json, "Buy");
            item.sell = _num(json, "Sell");
            item.change = _num(json, "Change");
            item.changePercent = _num(json, "ChangePercent");
            item.high = _num(json, "High");
            item.low = _num(json, "Low");
            item.yearlyHigh = _num(json, "YearlyHigh");
            item.yearlyLow = _num(json, "YearlyLow");
            item.yearlyStart = _num(json, "YearlyStart");
            item.yearlyChange = _num(json, "YearlyChange");
            item.zvSpread = _num(json, "ZV_SPREAD");
            item.krd3YR = _num(json, "KRD_3YR");
            item.krd5YR = _num(json, "KRD_5YR");
            item.krd1YR = _num(json, "KRD_1YR");
            item.id = _num(json, "ID");
            ret.add(item);
        }
        return ret;
    }

    // Value<T> hands back the type's default when a key is absent, so these do
    // the same rather than throwing on a row that is missing one.
    static String? _str(Map<String, dynamic> json, String key) {
        var v = json[key];
        return v == null ? null : v.toString();
    }

    static double _num(Map<String, dynamic> json, String key) {
        var v = json[key];
        if (v is num) {
            return v.toDouble();
        }
        if (v is String) {
            return double.tryParse(v) ?? 0;
        }
        return 0;
    }
}
//end async data
