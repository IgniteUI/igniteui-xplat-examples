
namespace Infragistics.Samples
{
    //begin data
using System.Collections.Generic;

public class AnnotationSliceDataItem
{
    public double Value { get; set; }
    public string Label { get; set; }

}
public class AnnotationSliceEarningsMissData
    : List<AnnotationSliceDataItem>
{
    public AnnotationSliceEarningsMissData()
    {
        this.Add(new AnnotationSliceDataItem()
        {
            Value = 9,
            Label = @"Earnings Miss"
        });
        this.Add(new AnnotationSliceDataItem()
        {
            Value = 179,
            Label = @"Earnings Miss"
        });
        this.Add(new AnnotationSliceDataItem()
        {
            Value = 215,
            Label = @"Earnings Miss"
        });
    }
}
    //end data
}