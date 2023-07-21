
namespace Infragistics.Samples
{
    //begin data
    using System;
    using System.Collections.Generic;
    using System.Collections.ObjectModel;

    public class MyTimelineData : List<MyTimelineInfo>
    {
        public MyTimelineData()
        {
            Add(new MyTimelineInfo { Index = 0, Label = "0", Value = 10, Date = new DateTime(2000, 1, 1) });
            Add(new MyTimelineInfo { Index = 1, Label = "1", Value = 30, Date = new DateTime(2000, 1, 2) });
            Add(new MyTimelineInfo { Index = 2, Label = "2", Value = 20, Date = new DateTime(2000, 1, 3) });
            Add(new MyTimelineInfo { Index = 3, Label = "3", Value = 40, Date = new DateTime(2000, 1, 4) });
        }
    }
    // https://www.timetoast.com/timelines/10-important-events-in-computer-history

    public class MyTimelineInfo
    {
        public string Details { get; set; }
        public double Value { get; set; }

        public DateTime Date { get; set; }
        public string Label { get; set; }
        public int Index { get; set; }
    }

    //end data
}