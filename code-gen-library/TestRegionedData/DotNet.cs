//begin data
//begin TestRegionedLookup
public class TestRegionedLookup
{
    public static List<string> Names()
    {
        return new List<string>() { "first", "second" };
    }
}
//end TestRegionedLookup
//begin TestRegionedRows
public class TestRegionedData : List<TestRegionedDataItem>
{
    public TestRegionedData()
    {
        foreach (var name in TestRegionedLookup.Names())
        {
            this.Add(new TestRegionedDataItem() { Name = name });
        }
    }
}
//end TestRegionedRows
//end data
