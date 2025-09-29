//begin imports
//end imports

//begin async data
import Foundation

public class FinancialDataService {
    public static func fetchData(completion: @escaping (ArrayList<FinancialDataDetails>) -> Void) {
        let urlString = "https://static.infragistics.com/xplatform/data/stocks/FinancialData1000.json"
        guard let url = URL(string: urlString) else {
            completion([])
            return
        }

        let task = URLSession.shared.dataTask(with: url) { data, _, error in
            guard let data = data, error == nil,
                  let jsonArray = try? JSONSerialization.jsonObject(with: data) as? [[String: Any]] else {
                completion([])
                return
            }

            let stockItems = jsonArray.map { json -> FinancialDataDetails in
                let item = FinancialDataDetails()
                item.category = json["Category"] as? String
                item.type = json["Type"] as? String
                item.contract = json["Contract"] as? String
                item.settlement = json["Settlement"] as? String
                item.region = json["Region"] as? String
                item.country = json["Country"] as? String
                item.risk = json["Risk"] as? String
                item.sector = json["Sector"] as? String
                item.issuer = json["Issuer"] as? String
                item.maturity = json["Maturity"] as? String
                item.indGroup = json["IndGroup"] as? String
                item.indSector = json["IndSector"] as? String
                item.indCategory = json["IndCategory"] as? String
                item.cpn = json["Cpn"] as? String
                item.spread = json["Spread"] as? Double
                item.open = json["Open"] as? Double
                item.price = json["Price"] as? Double
                item.buy = json["Buy"] as? Double
                item.sell = json["Sell"] as? Double
                item.change = json["Change"] as? Double
                item.changePercent = json["ChangePercent"] as? Double
                item.high = json["High"] as? Double
                item.low = json["Low"] as? Double
                item.yearlyHigh = json["YearlyHigh"] as? Double
                item.yearlyLow = json["YearlyLow"] as? Double
                item.yearlyStart = json["YearlyStart"] as? Double
                item.yearlyChange = json["YearlyChange"] as? Double
                item.zvSpread = json["ZV_SPREAD"] as? Double
                item.krd3Yr = json["KRD_3YR"] as? Double
                item.krd5Yr = json["KRD_5YR"] as? Double
                item.krd1Yr = json["KRD_1YR"] as? Double
                item.id = json["ID"] as? Int
                item.currency = json["Currency"] as? String
                item.security = json["Security"] as? String
                item.volume = json["Volume"] as? Double
                return item
            }

            completion(ArrayList<FinancialDataDetails>(array: stockItems))
        }

        task.resume()
    }
}

public class FinancialDataDetails: ISampleDataItem {
    public var category: String? = nil
    public var type: String? = nil
    public var spread: Double? = nil
    public var open: Double? = nil
    public var price: Double? = nil
    public var buy: Double? = nil
    public var sell: Double? = nil
    public var change: Double? = nil
    public var changePercent: Double? = nil
    public var volume: Double? = nil
    public var high: Double? = nil
    public var low: Double? = nil
    public var yearlyHigh: Double? = nil
    public var yearlyLow: Double? = nil
    public var yearlyStart: Double? = nil
    public var yearlyChange: Double? = nil
    public var settlement: String? = nil
    public var contract: String? = nil
    public var region: String? = nil
    public var country: String? = nil
    public var risk: String? = nil
    public var sector: String? = nil
    public var currency: String? = nil
    public var security: String? = nil
    public var issuer: String? = nil
    public var maturity: String? = nil
    public var indGroup: String? = nil
    public var indSector: String? = nil
    public var indCategory: String? = nil
    public var cpn: String? = nil
    public var krd3Yr: Double? = nil
    public var zvSpread: Double? = nil
    public var krd5Yr: Double? = nil
    public var krd1Yr: Double? = nil
    public var id: Int? = nil
}
//end async data
