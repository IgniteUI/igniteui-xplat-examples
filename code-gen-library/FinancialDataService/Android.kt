//begin imports
//end imports

//begin async data
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import org.json.JSONArray
import java.net.URL

class FinancialDataService {

    companion object {
        suspend fun fetchData(): List<FinancialDataDetails> = withContext(Dispatchers.IO) {
            val url = "https://static.infragistics.com/xplatform/data/stocks/FinancialData1000.json"
            val jsonText = URL(url).readText()
            val jsonArray = JSONArray(jsonText)
            return@withContext convertData(jsonArray)
        }

        private fun convertData(jsonArray: JSONArray): List<FinancialDataDetails> {
            val stockItems = mutableListOf<FinancialDataDetails>()

            for (i in 0 until jsonArray.length()) {
                val json = jsonArray.getJSONObject(i)
                val item = FinancialDataDetails().apply {
                    category = json.optString("Category")
                    type = json.optString("Type")
                    contract = json.optString("Contract")
                    settlement = json.optString("Settlement")
                    region = json.optString("Region")
                    country = json.optString("Country")
                    risk = json.optString("Risk")
                    sector = json.optString("Sector")
                    issuer = json.optString("Issuer")
                    maturity = json.optString("Maturity")
                    indGroup = json.optString("IndGroup")
                    indSector = json.optString("IndSector")
                    indCategory = json.optString("IndCategory")
                    cpn = json.optString("Cpn")
                    spread = json.optDouble("Spread")
                    open = json.optDouble("Open")
                    price = json.optDouble("Price")
                    buy = json.optDouble("Buy")
                    sell = json.optDouble("Sell")
                    change = json.optDouble("Change")
                    changePercent = json.optDouble("ChangePercent")
                    high = json.optDouble("High")
                    low = json.optDouble("Low")
                    yearlyHigh = json.optDouble("YearlyHigh")
                    yearlyLow = json.optDouble("YearlyLow")
                    yearlyStart = json.optDouble("YearlyStart")
                    yearlyChange = json.optDouble("YearlyChange")
                    zvSpread = json.optDouble("ZV_SPREAD")
                    krd3Yr = json.optDouble("KRD_3YR")
                    krd5Yr = json.optDouble("KRD_5YR")
                    krd1Yr = json.optDouble("KRD_1YR")
                    id = json.optInt("ID")
                    currency = json.optString("Currency")
                    security = json.optString("Security")
                    volume = json.optDouble("Volume")
                }
                stockItems.add(item)
            }

            return stockItems
        }
    }
}


class FinancialDataDetails {
    var category: String? = null
    var type: String? = null
    var spread: Double? = null
    var open: Double? = null
    var price: Double? = null
    var buy: Double? = null
    var sell: Double? = null
    var change: Double? = null
    var changePercent: Double? = null
    var volume: Double? = null
    var high: Double? = null
    var low: Double? = null
    var yearlyHigh: Double? = null
    var yearlyLow: Double? = null
    var yearlyStart: Double? = null
    var yearlyChange: Double? = null
    var settlement: String? = null
    var contract: String? = null
    var region: String? = null
    var country: String? = null
    var risk: String? = null
    var sector: String? = null
    var currency: String? = null
    var security: String? = null
    var issuer: String? = null
    var maturity: String? = null
    var indGroup: String? = null
    var indSector: String? = null
    var indCategory: String? = null
    var cpn: String? = null
    var krd3Yr: Double? = null
    var zvSpread: Double? = null
    var krd5Yr: Double? = null
    var krd1Yr: Double? = null
    var id: Int? = null
}
//end async data