//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Charts;
using System.Windows.Media;
//end imports



public class CategoryStyleTurnLowValuesRed
{

    //begin eventHandler
    //WPF: Infragistics.Controls.Charts.AssigningCategoryStyleEventHandler
    public void CategoryStyleTurnLowValuesRed(object sender, AssigningCategoryStyleEventArgs args)
    {
        var series = (Series)sender;
        var items = args.GetItems(args.StartIndex, args.EndIndex);
        for (var i = 0; i < items.Length; i++) 
        {
            var item = items[i];
            var value = (double)series.GetItemValue(item, "ValueMemberPath");
            if (value < 60) {
                args.Fill = new SolidColorBrush(Colors.Red);
            }
        }
    }
    //end eventHandler
}