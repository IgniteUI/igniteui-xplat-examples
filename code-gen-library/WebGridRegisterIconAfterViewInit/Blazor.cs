//begin imports
using IgniteUI.Blazor.Controls;
using System;
using System.Threading.Tasks;
//end imports

public class WebGridRegisterIconAfterViewInit
{

    //begin eventHandler
    public void WebGridRegisterIconAfterViewInit()
    {
        var icon = CodeGenHelper.GetDescription<IgbIcon>("icon");
        icon.EnsureReady().ContinueWith(new Action<Task>((e) =>
        {
            const string arrowUpward = "<svg xmlns='http://www.w3.org/2000/svg' height='48' width='48'><path d='M22.5 40V13.7L10.1 26.1 8 24 24 8l16 16-2.1 2.1-12.4-12.4V40Z'/></svg>";
            const string arrowDownward = "<svg xmlns='http://www.w3.org/2000/svg' height='48' width='48'><path d='M24 40 8 24l2.1-2.1 12.4 12.4V8h3v26.3l12.4-12.4L40 24Z'/></svg>";
            icon.RegisterIconFromText("arrow_upward", arrowUpward, "material");
            icon.RegisterIconFromText("arrow_downward", arrowDownward, "material");
        }));
    }
    //end eventHandler
}