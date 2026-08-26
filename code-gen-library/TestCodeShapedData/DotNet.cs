//begin data
using System;
using System.Collections.Generic;

public class TestCodeShapedDataItem
{
    public string Name { get; set; }
    public double Value { get; set; }
}

public class TestCodeShapedData : List<TestCodeShapedDataItem>
{
    public TestCodeShapedData()
    {
        this.Add(new TestCodeShapedDataItem() { Name = "first", Value = 1 });
        this.Add(new TestCodeShapedDataItem() { Name = "second", Value = 2 });
    }
}
//end data
