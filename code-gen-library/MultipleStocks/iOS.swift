//begin imports
//end imports

//begin async data
import Foundation

public class StockItem: ISampleDataItem {
    public var open: Double?
    public var close: Double?
    public var high: Double?
    public var low: Double?
    public var volume: Double?
    public var date: Date?

    public init(open: Double? = nil, close: Double? = nil, high: Double? = nil, low: Double? = nil, volume: Double? = nil, date: Date? = nil) {
        self.open = open
        self.close = close
        self.high = high
        self.low = low
        self.volume = volume
        self.date = date
    }
}

public class MultipleStocks {

    public func fetch() async -> [[StockItem]] {
        async let google = getGoogleStock()
        async let amazon = getAmazonStock()
        return await [google, amazon]
    }

    public func getAmazonStock() async -> [StockItem] {
        let url = "https://static.infragistics.com/xplatform/data/stocks/stockAmazon.json"
        let jsonData = await fetchJsonArray(url: url)
        let stockData = convertData(jsonArray: jsonData)
        // You can attach metadata here if needed
        return stockData
    }

    public func getGoogleStock() async -> [StockItem] {
        let url = "https://static.infragistics.com/xplatform/data/stocks/stockGoogle.json"
        let jsonData = await fetchJsonArray(url: url)
        let stockData = convertData(jsonArray: jsonData)
        return stockData
    }

    public func getTeslaStock() async -> [StockItem] {
        let url = "https://static.infragistics.com/xplatform/data/stocks/stockTesla.json"
        let jsonData = await fetchJsonArray(url: url)
        return convertData(jsonArray: jsonData)
    }

    public func getMicrosoftStock() async -> [StockItem] {
        let url = "https://static.infragistics.com/xplatform/data/stocks/stockMicrosoft.json"
        let jsonData = await fetchJsonArray(url: url)
        return convertData(jsonArray: jsonData)
    }

    private func fetchJsonArray(url: String) async -> [[String: Any]] {
        guard let url = URL(string: url) else { return [] }
        do {
            let (data, _) = try await URLSession.shared.data(from: url)
            if let jsonArray = try JSONSerialization.jsonObject(with: data) as? [[String: Any]] {
                return jsonArray
            }
        } catch {
            print("Error fetching JSON: \(error)")
        }
        return []
    }

    private func convertData(jsonArray: [[String: Any]]) -> [StockItem] {
        var stockItems: [StockItem] = []
        let dateFormatter = DateFormatter()
        dateFormatter.dateFormat = "yyyy-MM-dd"
        dateFormatter.locale = Locale(identifier: "en_US")

        for json in jsonArray {
            let dateString = json["date"] as? String ?? ""
            var date = dateFormatter.date(from: dateString)
            if let d = date {
                var calendar = Foundation.Calendar.current
                date = calendar.date(bySettingHour: 13, minute: 0, second: 0, of: d)
            }

            let item = StockItem(
                open: json["open"] as? Double,
                close: json["close"] as? Double,
                high: json["high"] as? Double,
                low: json["low"] as? Double,
                volume: json["volume"] as? Double,
                date: date
            )
            stockItems.append(item)
        }

        return stockItems
    }
}
//end async data
