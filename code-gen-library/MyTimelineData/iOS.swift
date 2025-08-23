//begin imports
//end imports

//begin data
public class MyTimelineData: [MyTimelineInfo] {
    public init() {
        self.append(MyTimelineInfo().apply {
            $0.Index = 0
            $0.Label = "0"
            $0.Value = 10.0
            $0.Date = MyTimelineInfo.toDate("2000-01-11")
        })
        self.append(MyTimelineInfo().apply {
            $0.Index = 1
            $0.Label = "1"
            $0.Value = 40.0
            $0.Date = MyTimelineInfo.toDate("2000-01-12")
        })
        self.append(MyTimelineInfo().apply {
            $0.Index = 2
            $0.Label = "2"
            $0.Value = 20.0
            $0.Date = MyTimelineInfo.toDate("2000-01-13")
        })
        self.append(MyTimelineInfo().apply {
            $0.Index = 3
            $0.Label = "3"
            $0.Value = 30.0
            $0.Date = MyTimelineInfo.toDate("2000-01-14")
        })
    }
}

public class MyTimelineInfo {
    public init() {}

    public var Index: Int = 0
    public var Value: Double = 0.0
    public var Label: String? = nil
    public var Details: String? = nil
    public var Date: Date? = nil

    public static func toDate(_ dateString: String) -> Date? {
        let formatter = DateFormatter()
        formatter.dateFormat = "yyyy-MM-dd"
        return formatter.date(from: dateString)
    }
}
//end data
