
namespace Infragistics.Samples
{
    //begin data
using System.Collections.Generic;

public class AnnotationLineDataItem
{
    public double StartX { get; set; }
    public double StartY { get; set; }
    public double EndX { get; set; }
    public double EndY { get; set; }
    public string Label { get; set; }
}

public class AnnotationLineData2
    : List<AnnotationLineDataItem>
{
    public AnnotationLineData2()
    {
        this.Add(new AnnotationLineDataItem()
        {
            StartX = 48,
            StartY = 25,
            EndX = 105,
            EndY = 250,
            Label = @"Growth &\nSupport"
        });
        this.Add(new AnnotationLineDataItem()
        {
            StartX = 108,
            StartY = 440,
            EndX = 155,
            EndY = 210,
            Label = @"Decline &\nResistance"
        });
    }
}
    //end data
}