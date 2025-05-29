
namespace Infragistics.Samples
{
    //begin data
using System.Collections.Generic;

public class AnnotationSliceDataItem
{
    public double Value { get; set; }
    public string Label { get; set; }

}
public class AnnotationSliceEarningsBeatData
    : List<AnnotationSliceDataItem>
{
    public AnnotationSliceEarningsBeatData()
    {
        this.Add(new AnnotationSliceDataItem()
        {
            Value = 155,
            Label = @"Earnings Beat"
        });
        this.Add(new AnnotationSliceDataItem()
        {
            Value = 86,
            Label = @"Earnings Beat"
        });
        this.Add(new AnnotationSliceDataItem()
        {
            Value = 28,
            Label = @"Earnings Miss"
        });
    }
}
    //end data
}