
namespace Infragistics.Samples
{
    //begin data
using System.Collections.Generic;

public class AnnotationSliceDataItem
{
    public double Value { get; set; }
    public string Label { get; set; }

}
public class AnnotationSliceStockSplitData
    : List<AnnotationSliceDataItem>
{
    public AnnotationSliceStockSplitData()
    {
        this.Add(new AnnotationSliceDataItem()
        {
            Value = 126,
            Label = @"Stock Split 3-1"
        });
        this.Add(new AnnotationSliceDataItem()
        {
            Value = 61,
            Label = @"Stock Split 5-1"
        });
    }
}
    //end data
}