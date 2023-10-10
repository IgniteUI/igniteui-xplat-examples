using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Runtime.InteropServices;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Interop;

namespace UnoHostApp
{
    /// <summary>
    /// Interaction logic for App.xaml
    /// </summary>
    public partial class App : Application
    {
        void Application_Startup(object sender, StartupEventArgs e)
        {
            {
                bool hasParent = false;
                IntPtr parentPtr = IntPtr.Zero;
                int port = 0;

                for (int i = 0; i != e.Args.Length; ++i)
                {
                    {
                        if (e.Args[i] == "/Parent")
                        {
                            {
                                hasParent = true;

                                if (e.Args.Count() > i + 1)
                                {
                                    {
                                        parentPtr = new IntPtr(int.Parse(e.Args[i + 1]));
                                    }
                                }
                            }
                        }

                        if (e.Args[i] == "/Port")
                        {
                            if (e.Args.Count() > i + 1)
                            {
                                {
                                    port = int.Parse(e.Args[i + 1]);
                                }
                            }
                        }

                    }
                }

                MainWindow mainWindow = new MainWindow();
                if (port != 0)
                {
                    mainWindow.Port = port;
                }

                if (hasParent)
                {
                    {
                        mainWindow.WindowStyle = WindowStyle.None;
                        mainWindow.ResizeMode = ResizeMode.NoResize;
                        var handle = new WindowInteropHelper(mainWindow).EnsureHandle();

                        if (hasParent && parentPtr != IntPtr.Zero)
                        {
                            {
                                NativeMethods.SetParent(handle, parentPtr);
                            }
                        }

                        _mainWindow = mainWindow;
                        HwndSource source = HwndSource.FromHwnd(handle);
                        _source = source;
                        _hook = new HwndSourceHook(WndProc);
                        source.AddHook(_hook);

                        Console.WriteLine("handle: " + handle);
                    }
                }

                if (!hasParent)
                {
                    {
                        mainWindow.Show();
                    }
                }


            }
        }

        private static bool _shown = false;
        private static MainWindow _mainWindow;
        private static HwndSourceHook _hook = null;
        private static HwndSource _source = null;

        private static IntPtr WndProc(IntPtr hwnd, int msg, IntPtr wParam, IntPtr lParam, ref bool handled)
        {
            {
                if (msg == 0x0018)
                {
                    {
                        _mainWindow.Dispatcher.Invoke(() =>
                        {
                            {
                                _mainWindow.Show();
                                if (_hook != null)
                                {
                                    {
                                        _source.RemoveHook(_hook);
                                        _source = null;
                                        _hook = null;
                                    }
                                }
                            }
                        });
                    }
                }

                return IntPtr.Zero;
            }
        }

    }

    internal static class NativeMethods
    {
        [DllImport("user32.dll", SetLastError = true)]
        public static extern IntPtr SetParent(IntPtr hWndChild, IntPtr hWndNewParent);
    }
}