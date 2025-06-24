//begin imports
//end imports

//begin async data
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import java.net.URL
import java.text.SimpleDateFormat
import java.util.*
import org.json.JSONArray
import org.json.JSONObject

public class StockItem(
    var open: Double? = null,
    var close: Double? = null,
    var high: Double? = null,
    var low: Double? = null,
    var volume: Double? = null,
    var date: Calendar? = null
)

public class MultipleStocks {

    suspend fun fetch(): List<List<StockItem>> {
        val dataSources = listOf(
            getGoogleStock(),
            getAmazonStock()
        )
        return dataSources
    }

    suspend fun getAmazonStock(): List<StockItem> {
        val url = "https://static.infragistics.com/xplatform/data/stocks/stockAmazon.json"
        val jsonData = fetchJsonArray(url)
        val stockData = convertData(jsonData)
        // You can attach metadata here if needed
        return stockData
    }

    suspend fun getGoogleStock(): List<StockItem> {
        val url = "https://static.infragistics.com/xplatform/data/stocks/stockGoogle.json"
        val jsonData = fetchJsonArray(url)
        val stockData = convertData(jsonData)
        return stockData
    }

    suspend fun getTeslaStock(): List<StockItem> {
        val url = "https://static.infragistics.com/xplatform/data/stocks/stockTesla.json"
        val jsonData = fetchJsonArray(url)
        return convertData(jsonData)
    }

    suspend fun getMicrosoftStock(): List<StockItem> {
        val url = "https://static.infragistics.com/xplatform/data/stocks/stockMicrosoft.json"
        val jsonData = fetchJsonArray(url)
        return convertData(jsonData)
    }

    private suspend fun fetchJsonArray(url: String): JSONArray = withContext(Dispatchers.IO) {
        val jsonText = URL(url).readText()
        JSONArray(jsonText)
    }

    private fun convertData(jsonArray: JSONArray): List<StockItem> {
        val stockItems = mutableListOf<StockItem>()
        val dateFormat = SimpleDateFormat("yyyy-MM-dd", Locale.US)

        for (i in 0 until jsonArray.length()) {
            val json = jsonArray.getJSONObject(i)
            val date = dateFormat.parse(json.getString("date"))?.apply {
                hours = 13
                minutes = 0
                seconds = 0
            }
            val calendar = Calendar.getInstance().apply {
                time = date ?: Date()
            }

            val item = StockItem(
                open = json.optDouble("open"),
                high = json.optDouble("high"),
                low = json.optDouble("low"),
                close = json.optDouble("close"),
                volume = json.optDouble("volume"),
                date = calendar
            )
            stockItems.add(item)
        }

        return stockItems
    }
}

//end async data