using System;
using System.Collections.Generic;
using System.Text;

namespace UwpHost
{
    public class Program
    {
        [System.STAThreadAttribute()]
        public static void Main()
        {
            using (new UwpHostApp.App())
            {
                UwpHost.App app = new UwpHost.App();
                app.InitializeComponent();
                app.Run();
            }
        }
    }
}
