
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

public class AnnotationLineData1
    : List<AnnotationLineDataItem>
{
    public AnnotationLineData1()
    {
        this.Add(new AnnotationLineDataItem()
        {
            StartX = 190,
            StartY = 138,
            EndX = 230,
            EndY = 138,
            Label = @"52-Week Low"
        });
        this.Add(new AnnotationLineDataItem()
        {
            StartX = 190,
            StartY = 481,
            EndX = 230,
            EndY = 481,
            Label = @"52-Week High"
        });
    }
}
    //end data
}