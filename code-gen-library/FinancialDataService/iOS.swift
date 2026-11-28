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
                item.spread = json["Spread"] as? Double ?? .nan
                item.open = json["Open"] as? Double ?? .nan
                item.price = json["Price"] as? Double ?? .nan
                item.buy = json["Buy"] as? Double ?? .nan
                item.sell = json["Sell"] as? Double ?? .nan
                item.change = json["Change"] as? Double ?? .nan
                item.changePercent = json["ChangePercent"] as? Double ?? .nan
                item.high = json["High"] as? Double ?? .nan
                item.low = json["Low"] as? Double ?? .nan
                item.yearlyHigh = json["YearlyHigh"] as? Double ?? .nan
                item.yearlyLow = json["YearlyLow"] as? Double ?? .nan
                item.yearlyStart = json["YearlyStart"] as? Double ?? .nan
                item.yearlyChange = json["YearlyChange"] as? Double ?? .nan
                item.zvSpread = json["ZV_SPREAD"] as? Double ?? .nan
                item.krd3Yr = json["KRD_3YR"] as? Double ?? .nan
                item.krd5Yr = json["KRD_5YR"] as? Double ?? .nan
                item.krd1Yr = json["KRD_1YR"] as? Double ?? .nan
                item.id = json["ID"] as? Int ?? 0
                item.currency = json["Currency"] as? String
                item.security = json["Security"] as? String
                item.volume = json["Volume"] as? Double ?? .nan
                return item
            }

            completion(ArrayList<FinancialDataDetails>(array: stockItems))
        }

        task.resume()
    }
}

// Members are read through the Objective-C runtime, which cannot see optional numbers, so a
// missing number is NaN, as the charts treat an absent value.
@objcMembers
public class FinancialDataDetails: NSObject, ISampleDataItem {
    public var category: String? = nil
    public var type: String? = nil
    public var spread: Double = .nan
    public var open: Double = .nan
    public var price: Double = .nan
    public var buy: Double = .nan
    public var sell: Double = .nan
    public var change: Double = .nan
    public var changePercent: Double = .nan
    public var volume: Double = .nan
    public var high: Double = .nan
    public var low: Double = .nan
    public var yearlyHigh: Double = .nan
    public var yearlyLow: Double = .nan
    public var yearlyStart: Double = .nan
    public var yearlyChange: Double = .nan
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
    public var krd3Yr: Double = .nan
    public var zvSpread: Double = .nan
    public var krd5Yr: Double = .nan
    public var krd1Yr: Double = .nan
    public var id: Int = 0
}
//end async data
