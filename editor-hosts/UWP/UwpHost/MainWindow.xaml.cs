using Microsoft.AspNet.SignalR.Client;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace UwpHost
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        private static readonly NLog.Logger Logger = NLog.LogManager.GetLogger("MainWindow");

        public MainWindow()
        {
            InitializeComponent();
            Loaded += MainWindow_Loaded;
            Closing += MainWindow_Closing;
        }

        private void WindowsXamlHost_ChildChanged(object sender, EventArgs e)
        {
            // Hook up x:Bind source.
            global::Microsoft.Toolkit.Wpf.UI.XamlHost.WindowsXamlHost windowsXamlHost =
                sender as global::Microsoft.Toolkit.Wpf.UI.XamlHost.WindowsXamlHost;
            global::IgEditor.WPFSurfaceHost surfaceHost =
                windowsXamlHost.GetUwpInternalObject() as global::IgEditor.WPFSurfaceHost;

            _surfaceHost = surfaceHost;
        }

        private void MainWindow_Closing(object sender, System.ComponentModel.CancelEventArgs e)
        {
            if (_connection != null)
            {
                _connection.Dispose();
                _connection = null;
            }
        }

        HubConnection _connection;
        private IHubProxy _proxy;

        private bool _ready = false;
        private IgEditor.WPFSurfaceHost _surfaceHost;

        public async Task EnsureReady()
        {
            while (!_ready)
            {
                if (_surfaceHost != null)
                {
                    _ready = _surfaceHost.CheckReady();
                }
                await Task.Delay(200).ConfigureAwait(true);
            }
        }

        private bool _loaded = false;
        private async void MainWindow_Loaded(object sender, RoutedEventArgs e)
        {
            Logger.Info("MainWindow loaded");
            if (Port != 0)
            {
                Logger.Info("SignalR port: {0}", Port);
                //MessageBox.Show(Port.ToString());
                _connection = new HubConnection("http://localhost:" + Port + "/signalr/MessagingHub");
                var proxy = _connection.CreateHubProxy("MessagingHub");
                Logger.Info("created hub proxy");

                proxy.On("SendDetails", async (string currentPlatform, string currentVersion, string assembliesPath, string versionNumber, string libraryJsonFile, string validationPath) =>
                {
                    Logger.Info("received info from editor: {0}, {1}, {2}, {3}, {4}, {5}", currentPlatform, currentVersion, assembliesPath, versionNumber, libraryJsonFile, validationPath);
                    await Dispatcher.BeginInvoke((Action)(async () =>
                    {
                        if (!_loaded)
                        {
                            if (_surfaceHost != null)
                            {
                                _surfaceHost.LibraryPath = libraryJsonFile;
                                _surfaceHost.ValidationPath = validationPath;
                                _loaded = true;
                            }
                            //grid.Children.Clear();
                            //var host = new IgEditor.WPFSurfaceHost();
                            //_host = host;
                            ////host.AssembliesPath = assembliesPath;
                            //host.Version = versionNumber;
                            //host.LibraryPath = libraryJsonFile;
                            //host.ValidationPath = validationPath;
                            //grid.Children.Add(host);

                        }

                        Logger.Info("ensuring ready");
                        await EnsureReady();
                        Logger.Info("sending ready");
                        await proxy.Invoke("SendReady");
                    }));
                    //proxy.Invoke("SendReady");
                });
                proxy.On("SendJson", (string json) =>
                {
                    Logger.Trace("received json");
                    Dispatcher.BeginInvoke((Action)(() =>
                    {
                        //if (grid.Children.Count > 0)
                        //{
                        //    var host = grid.Children[0] as IgEditor.WPFSurfaceHost;
                        //    if (host != null)
                        //    {
                        //        var validation = host.LoadJson(json);
                        //        proxy.Invoke("SendValidationResults", validation);
                        //    }
                        //}
                        if (_surfaceHost != null)
                        {
                            var validation = _surfaceHost.LoadJson(json);
                            Logger.Trace("sending validation results");
                            proxy.Invoke("SendValidationResults", validation);
                        }
                    }));
                });

                _connection.Closed += async () =>
                {
                    await Task.Delay(new Random().Next(0, 5) * 1000);
                    await _connection.Start();
                };

                Logger.Info("starting SignalR hub connection");
                await _connection.Start();
                Logger.Info("started SignalR hub connection");

                _proxy = proxy;
                Logger.Info("sending connected");
                await _proxy.Invoke("SendConnected");
                Logger.Info("sent connected");
            }
        }

        public int Port { get; internal set; }
    }
}