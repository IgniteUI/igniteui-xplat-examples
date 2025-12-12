//begin imports
//end imports

//begin data
public class MyTimelineData: ArrayList<MyTimelineInfo> {
    constructor() {
        
        this.add(MyTimelineInfo().apply { Index = 0; Label = "0"; Value = 10.0; Date = toDate("2000-01-11")});
        this.add(MyTimelineInfo().apply { Index = 1; Label = "1"; Value = 40.0; Date = toDate("2000-01-12")});
        this.add(MyTimelineInfo().apply { Index = 2; Label = "2"; Value = 20.0; Date = toDate("2000-01-13")});
        this.add(MyTimelineInfo().apply { Index = 3; Label = "3"; Value = 30.0; Date = toDate("2000-01-14")});
    }
}

public class MyTimelineInfo
{
    constructor() {
    }
    public var Index: Int = 0;
    public var Value: Double = 0.0;
    public var Label: String? = null;
    public var Details: String? = null;
    public var Date: java.util.Calendar? = null;

    public fun toDate(dateString: String): java.util.Calendar {
        val calendar = java.util.Calendar.getInstance()
        try {
            val dateFormat = java.text.SimpleDateFormat("yyyy-MM-dd")
            calendar.time = dateFormat.parse(dateString)
        } catch (e: Exception) {
            e.printStackTrace()
        }
        return calendar
    }
}
//end data
