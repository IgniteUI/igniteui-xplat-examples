//begin async data
import 'dart:async';
import 'dart:convert';
import 'dart:io';
import 'package:igniteui_flutter_core/src/ArrayList.dart' show ArrayList;
import "package:igniteui_flutter_core/src/ObservableCollection\$1.dart" show ObservableCollection$1;
import 'package:igniteui_flutter_core/src/reflection.dart' show IReflectable, IReflectableSet;
import 'package:igniteui_flutter_core/src/type.dart' show TypeInfo, markType;

// The keys stay as the C# and TypeScript spell them for the member paths the
// descriptions ask for. The JSON this fetches spells its own keys in lower
// case, and those are read separately below.
class MultipleStocksItem implements IReflectable, IReflectableSet {
    // ObservableCollection needs the element's TypeInfo, so this one is marked.
    static final TypeInfo? $t = markType<MultipleStocksItem>("MultipleStocksItem", () => null, () => MultipleStocksItem());

    DateTime? date = null;
    double open = 0;
    double high = 0;
    double low = 0;
    double close = 0;
    double volume = 0;

    Object? getValue(String? propertyName) {
        switch (propertyName) {
            case "Date":
                return this.date;
            case "Open":
                return this.open;
            case "High":
                return this.high;
            case "Low":
                return this.low;
            case "Close":
                return this.close;
            case "Volume":
                return this.volume;
        }
        return null;
    }

    void setValue(String? propertyName, Object? value) {
        switch (propertyName) {
            case "Date":
                this.date = value as DateTime?;
                break;
            case "Open":
                this.open = (value as num).toDouble();
                break;
            case "High":
                this.high = (value as num).toDouble();
                break;
            case "Low":
                this.low = (value as num).toDouble();
                break;
            case "Close":
                this.close = (value as num).toDouble();
                break;
            case "Volume":
                this.volume = (value as num).toDouble();
                break;
        }
    }
}

/// Observable, as the C# has it: the collection is what a chart binds to and
/// the samples add to it after the fact.
class TitledStockData extends ObservableCollection$1<MultipleStocksItem?> {
    TitledStockData() : super(MultipleStocksItem.$t);

    String? title = null;
}

class MultipleStocks extends ArrayList<TitledStockData?> {
    static Future<MultipleStocks> fetchAll() async {
        var google = await MultipleStocks.getGoogleStock();
        var amazon = await MultipleStocks.getAmazonStock();
        var val = MultipleStocks();
        val.add(google);
        val.add(amazon);
        return val;
    }

    /// gets Amazon stock OHLC prices from a .JSON file
    static Future<TitledStockData> getAmazonStock() async {
        var url = "https://static.infragistics.com/xplatform/data/stocks/stockAmazon.json";
        var data = await _fetch(url);
        var stockData = convertData(data);
        stockData.title = "Amazon";
        return stockData;
    }

    /// gets Tesla stock OHLC prices from a .JSON file
    static Future<TitledStockData> getTeslaStock() async {
        var url = "https://static.infragistics.com/xplatform/data/stocks/stockTesla.json";
        var data = await _fetch(url);
        var stockData = convertData(data);
        stockData.title = "Tesla";
        return stockData;
    }

    /// gets Microsoft stock OHLC prices from a .JSON file
    static Future<TitledStockData> getMicrosoftStock() async {
        var url = "https://static.infragistics.com/xplatform/data/stocks/stockMicrosoft.json";
        var data = await _fetch(url);
        var stockData = convertData(data);
        stockData.title = "Microsoft";
        return stockData;
    }

    /// gets Google stock OHLC prices from a .JSON file
    static Future<TitledStockData> getGoogleStock() async {
        var url = "https://static.infragistics.com/xplatform/data/stocks/stockGoogle.json";
        var data = await _fetch(url);
        var stockData = convertData(data);
        stockData.title = "Google";
        return stockData;
    }

    // HttpClient out of dart:io rather than a package: the emitted library
    // depends on the product packages and intl, and nothing else.
    static Future<List<dynamic>> _fetch(String url) async {
        var client = HttpClient();
        try {
            var request = await client.getUrl(Uri.parse(url));
            var response = await request.close();
            var str = await response.transform(utf8.decoder).join();
            return jsonDecode(str) as List<dynamic>;
        } finally {
            client.close();
        }
    }

    static TitledStockData convertData(List<dynamic> arr) {
        var ret = TitledStockData();
        for (var entry in arr) {
            var json = entry as Map<String, dynamic>;
            var date = json["date"].toString();
            var parts = date.split("-"); // "2020-01-01"
            var item = MultipleStocksItem();
            // The month is taken one past what the JSON says, as the C# does.
            item.date = DateTime(int.parse(parts[0]), int.parse(parts[1]) + 1, int.parse(parts[2]), 12, 0, 0);
            item.open = _num(json, "open");
            item.high = _num(json, "high");
            item.low = _num(json, "low");
            item.close = _num(json, "close");
            item.volume = _num(json, "volume");
            ret.add(item);
        }
        return ret;
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
