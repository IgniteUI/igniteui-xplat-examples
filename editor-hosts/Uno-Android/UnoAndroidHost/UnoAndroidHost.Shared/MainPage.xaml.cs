using Microsoft.AspNet.SignalR.Client;
using NLog;
using NLog.Config;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices.WindowsRuntime;
using System.Threading.Tasks;
using System.Xml;
using Windows.Foundation;
using Windows.Foundation.Collections;
using Windows.UI.Core;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;
using Windows.UI.Xaml.Controls.Primitives;
using Windows.UI.Xaml.Data;
using Windows.UI.Xaml.Input;
using Windows.UI.Xaml.Media;
using Windows.UI.Xaml.Navigation;

// The Blank Page item template is documented at http://go.microsoft.com/fwlink/?LinkId=402352&clcid=0x409

namespace UnoAndroidHost
{
    /// <summary>
    /// An empty page that can be used on its own or navigated to within a Frame.
    /// </summary>
    public sealed partial class MainPage : Page
    {
        private static NLog.Logger Logger = null; // NLog.LogManager.GetLogger("UnoAndroidMainWindow");

        public MainPage()
        {
            if (Logger == null)
            {
                var assembly = this.GetType().Assembly;
                var assemblyName = assembly.GetName().Name;
                var location = $"{assemblyName}.NLog.config";
                var stream = assembly.GetManifestResourceStream(location);
                LogManager.Configuration = new XmlLoggingConfiguration(XmlReader.Create(stream), null);
                Logger = NLog.LogManager.GetLogger("UnoAndroidMainWindow");
            }

            this.InitializeComponent();
            Port = 8866;
            Loaded += MainWindow_Loaded;

            _surfaceHost = new IgEditor.WPFSurfaceHost();
            grid.Children.Add(_surfaceHost);
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
                _connection = new HubConnection("http://10.0.2.2:" + Port + "/signalr/MessagingHub");
                var proxy = _connection.CreateHubProxy("MessagingHub");
                Logger.Info("created hub proxy");

                proxy.On("SendDetails", async (string currentPlatform, string currentVersion, string assembliesPath, string versionNumber, string libraryJsonFile, string validationPath) =>
                {
                    Logger.Info("received info from editor: {0}, {1}, {2}, {3}, {4}, {5}", currentPlatform, currentVersion, assembliesPath, versionNumber, libraryJsonFile, validationPath);
                    await Dispatcher.RunAsync(Windows.UI.Core.CoreDispatcherPriority.Normal, (DispatchedHandler)(async () =>
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
                proxy.On("SendJson", async (string json) =>
                {
                    Logger.Trace("received json");
                    await Dispatcher.RunAsync(Windows.UI.Core.CoreDispatcherPriority.Normal, (DispatchedHandler)(async () =>
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
                            await proxy.Invoke("SendValidationResults", validation);
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
