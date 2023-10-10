using System;
using System.Collections.Generic;
using System.Text;

namespace UnoHostApp
{
    public class Program
    {
        [System.STAThreadAttribute()]
        public static void Main()
        {
            using (new UnoHost.App())
            {
                UnoHostApp.App app = new UnoHostApp.App();
                app.InitializeComponent();
                app.Run();
            }
        }
    }
}
