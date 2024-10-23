//begin imports
//end imports

public class ChartStyleTest
{
    //begin eventHandler
    public void ChartStyleTest()
    {
        //OMIT HANLDER
    }
    //end eventHandler
    
    public Style RequiredStyles = (Style)XamlReader.Parse(@"
<Style
    xmlns=""http://schemas.microsoft.com/winfx/2006/xaml/presentation""
    TargetType=""XamCategoryChart""
>
    <Setter Property=""TitleTextColor"" Value=""Red"" />
</Style>
");
}