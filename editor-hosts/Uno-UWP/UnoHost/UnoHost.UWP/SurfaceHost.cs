using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
#if WINDOWS_UWP
using Windows.UI.Xaml;
#else
using System.Windows.Controls;
using System.Windows;
#endif
using System.Windows;
#if !NC && !WINDOWS_UWP
using System.AddIn;
using System.AddIn.Contract;
using System.AddIn.Pipeline;
#endif
using Newtonsoft.Json.Linq;
using Microsoft.CodeAnalysis;
using Microsoft.CSharp.RuntimeBinder;
using Microsoft.CodeAnalysis.CSharp;
using System.Text.RegularExpressions;
using Windows.UI.Xaml.Controls;

namespace IgEditor
{
    public class WPFSurfaceHost : Grid
    {
#if NC
        private string[] _assemblyList = new string[]
        {
            "Infragistics.WPF.dll",
            "Infragistics.WPF.DataVisualization.dll",
            "Infragistics.WPF.Controls.Charts.XamDataChart.dll",
            "Infragistics.WPF.Controls.Layouts.dll",
            "Infragistics.WPF.Controls.Inputs.dll",
            "Infragistics.WPF.Controls.Grids.XGrid.dll",
            "Infragistics.WPF.Controls.Grids.XamPropertyEditor.dll",
            "Infragistics.WPF.Controls.Grids.XamMultiColumnComboBox.dll",
            "Infragistics.WPF.Editors.dll",
            "Infragistics.WPF.Controls.Menus.XamMenu.dll",
            "Infragistics.WPF.Controls.Charts.XamFinancialChart.dll",
            "Infragistics.WPF.Controls.Navigation.XamZoomSlider.dll"
        };
#else
        private string[] _assemblyList = new string[]
        {
            "InfragisticsWPF4.v{ver}.dll",
            "InfragisticsWPF4.DataVisualization.v{ver}.dll",
            "InfragisticsWPF4.Controls.Charts.XamDataChart.v{ver}.dll",
            "InfragisticsWPF4.Controls.Layouts.v{ver}.dll",
            "InfragisticsWPF4.Controls.Inputs.v{ver}.dll",
            "InfragisticsWPF4.Controls.Grids.XGrid.v{ver}.dll",
            "InfragisticsWPF4.Controls.Grids.XamPropertyEditor.v{ver}.dll",
            "InfragisticsWPF4.Controls.Grids.XamMultiColumnComboBox.v{ver}.dll",
            "InfragisticsWPF4.Editors.v{ver}.dll",
            "InfragisticsWPF4.Controls.Menus.XamMenu.v{ver}.dll",
            "InfragisticsWPF4.Controls.Charts.XamFinancialChart.v{ver}.dll",
            "InfragisticsWPF4.Controls.Navigation.XamZoomSlider.v{ver}.dll"
        };
#endif
        private object _cr;
        private object _pcr;
        private MethodInfo _provideRef;
        private MethodInfo _loadJson;
        private MethodInfo _getMissing;
        private Grid _propertyEditor;
        private Grid _legendContent;
        private Grid _mainContent;

        public string AssembliesPath { get; set; }
        public string Version { get; set; }

        private string _libraryPath = null;
        public string LibraryPath
        {
            get
            {
                return _libraryPath;
            }

            set
            {
                _libraryPath = value;
                EnsureLibrary();
            }
        }
        private string _validationPath = null;
        public string ValidationPath
        {
            get
            {
                return _validationPath;
            }

            set
            {
                _validationPath = value;
                EnsureValidation();
            }
        }

        private static readonly NLog.Logger Logger = NLog.LogManager.GetLogger("CoreSurfaceHost");

        private static Assembly OnAssemblyResolve(object sender, ResolveEventArgs args)
        {
            foreach (var a in AppDomain.CurrentDomain.GetAssemblies())
            {
                var n = a.GetName();
                if (n.Name == args.Name ||
                    n.FullName == args.Name)
                {
                    return a;
                }
            }

            return null;
        }

        public WPFSurfaceHost()
        {
            //this.Background = new Windows.UI.Xaml.Media.SolidColorBrush(Windows.UI.Colors.Red);
            Grid propertyEditor = new Grid();
            Grid legendContent = new Grid() { HorizontalAlignment = HorizontalAlignment.Left };
            Grid mainContent = new Grid();

            _propertyEditor = propertyEditor;
            _legendContent = legendContent;
            _mainContent = mainContent;

            Grid.SetRow(_propertyEditor, 0);
            Grid.SetRow(_legendContent, 1);
            Grid.SetRow(_mainContent, 2);

            Children.Add(_propertyEditor);
            Children.Add(_legendContent);
            Children.Add(_mainContent);

            RowDefinitions.Add(new RowDefinition() { Height = new GridLength(1, GridUnitType.Auto) });
            RowDefinitions.Add(new RowDefinition() { Height = new GridLength(1, GridUnitType.Auto) });
            RowDefinitions.Add(new RowDefinition() { Height = new GridLength(1, GridUnitType.Star) });


            AppDomain.CurrentDomain.AssemblyResolve += OnAssemblyResolve;

            this.Loaded += WPFSurfaceHost_Loaded;
        }

        private Type GetDataVisType(string typeName)
        {

#if WINDOWS_UWP
            typeName = typeName.Replace("Infragistics.Controls.Description", "Infragistics.Portable.Description");
            var t = Type.GetType(typeName + ", Infragistics.UWP.DataVisualization");
            if (t == null)
            {
                t = Type.GetType(typeName + ", Infragistics.Core.DataVisualization");
            }
            if (t == null)
            {
                t = Type.GetType(typeName + ", Infragistics.UNO.DataVisualization");
            }
            return t;
#elif NC
            return Type.GetType(typeName + ", Infragistics.WPF.DataVisualization");
#else
            return Type.GetType(typeName + ", InfragisticsWPF4.DataVisualization.v{ver}".Replace("{ver}", Version));
#endif
        }

        private string Prefix
        {
            get
            {
#if NC
                return "Infragistics.WPF";
#else
                return "InfragisticsWPF4";
#endif
            }
        }

        // TODO find out why WPFSurfaceHost is loaded twice!
        private void WPFSurfaceHost_Loaded(object sender, RoutedEventArgs e)
        {
#if WINDOWS_UWP
            //pin the assemblies
            var dc = typeof(Infragistics.Controls.DataContext);
            var dcName = dc.Name;
            var chart = typeof(Infragistics.Controls.Charts.XamDataChart);
            var chartName = chart.Name;
            var grid = typeof(Infragistics.Controls.Grids.XamDataGrid);
            var gridName = grid.Name;
            //var gauge = typeof(Infragistics.Controls.Gauges.XamRadialGauge);
            //var gaugeName = gauge.Name;
#endif
#if !WINDOWS_UWP
            if (AssembliesPath != null)
#endif
            {
#if !WINDOWS_UWP
                Logger.Info("loading surface for assemblies: {0}", AssembliesPath);
                var assembliesPresent = new List<string>();
                var assembliesMissing = new List<string>();
                foreach (var assmeblyName in _assemblyList)
                {
                    var assmeblyFile = assmeblyName.Replace("{ver}", Version);
                    var assemblyPath = Path.Combine(AssembliesPath, assmeblyFile);
                    if (File.Exists(assemblyPath))
                    {
                        Logger.Info("found assembly: {0}", AssembliesPath);
                        assembliesPresent.Add(assemblyPath);
                    }
                    else
                    {
                        Logger.Warn("missing assembly: {0}", AssembliesPath);
                        assembliesMissing.Add(assmeblyFile);
                    }
                }

                foreach (var path in assembliesPresent)
                {
                    var assm = Assembly.LoadFrom(path);
                    _assemblies.Add(assm);
                }
#endif

                //if (assembliesMissing.Count > 0)
                //{
                //    Logger.Info("missing assemblies in: " + AssembliesPath);
                //    foreach (var assemblyName in assembliesMissing)
                //    {
                //        Logger.Info("missing: " + assemblyName);
                //    }
                //}

                //// report to the user if we have any assemblies missing otherwise load assemblies 
                //if (assembliesMissing.Count == 0)
                //{
                //    foreach (var path in assembliesPresent)
                //    {
                //        var assm = Assembly.LoadFrom(path);
                //        _assemblies.Add(assm);
                //    }
                //}
                //else if (!App.ReportedMissingAssemblies)
                //{
                //    App.ReportedMissingAssemblies = true;
                //    Logger.Info("missing assemblies in: " + AssembliesPath);
                //    foreach (var assemblyName in assembliesMissing)
                //    {
                //        Logger.Info("missing: " + assemblyName);
                //    }

                //    //MessageBox.Show("Missing Assemblies in: \n" + AssembliesPath + "\n\n" + string.Join("\n", assembliesMissing), "Cannot Find Assemblies",
                //    //MessageBoxButton.OK, MessageBoxImage.Error);
                //}

                //if (App.ReportedMissingAssemblies)
                //    return;

                Logger.Info("loading required rendering types");
#if WINDOWS_UWP
                var type = GetDataVisType("Infragistics.Portable.Description.ComponentRenderer");
                var factoryType = GetDataVisType("Infragistics.Portable.Description.ComponentRendererFactory");
                var createMethod = factoryType.GetMethod("Create");

                var cr = createMethod.Invoke(null, new object[] { });
                var pcr = createMethod.Invoke(null, new object[] { });

#else
                var type = GetDataVisType("Infragistics.Controls.Description.ComponentRenderer");
                var cr = Activator.CreateInstance(type);
                var pcr = Activator.CreateInstance(type);
#endif

                _cr = cr;
                _pcr = pcr;

                var context = _cr.GetType().GetProperty("Context").GetValue(_cr);
                _context = context;
                var pContext = _pcr.GetType().GetProperty("Context").GetValue(_pcr);
                Logger.Info("filling metadata context");
                foreach (var a in AppDomain.CurrentDomain.GetAssemblies())
                {
                    if (a.GetName().Name.StartsWith("Infragistics"))
                    {
                        foreach (var m in a.GetModules())
                        {
                            var types = m.GetType();
                        }
                    }
                    if (a.GetName().Name.StartsWith("Infragistics") && a.GetName().Name.Contains("DataVisualization"))
                    {
                        foreach (var m in a.GetModules())
                        {
                            foreach (var t in m.GetTypes())
                            {
                                if (t.Name.EndsWith("DescriptionModule"))
                                {
                                    var reg = t.GetMethod("Register");
                                    if (reg != null)
                                    {
                                        reg.Invoke(null, new object[] { context });
                                        reg.Invoke(null, new object[] { pContext });
                                    }
                                }
                            }
                        }
                    }
                }

                Logger.Info("finding required renderer functions");
                _provideRef = _cr.GetType().GetMethod("ProvideRefValue");
                var proceed = _cr.GetType().GetProperty("IsProceedOnErrorEnabled");
                proceed.SetValue(_cr, true);
                _provideRef.Invoke(_cr, new object[] { _propertyEditor, "renderer", _pcr });

                _loadJson = _cr.GetType().GetMethod("LoadJson");
                _getMissing = _cr.GetType().GetMethod("GetMissingRefs");

            }

            _loaded = true;
            EnsureLibrary();
            EnsureValidation();
        }

        private bool _loaded = false;

        private void EnsureValidation()
        {
            if (!_loaded)
            {
                return;
            }
            if (ValidationPath != null && _validation == null)
            {
                if (Directory.Exists(ValidationPath))
                {
                    var validationFile = Path.Combine(ValidationPath, "validationData.json");
                    var validationDataStr = File.ReadAllText(validationFile);

                    var validationType = GetDataVisType("Infragistics.Controls.Description.DescriptionJsonValidator");
                    if (validationType != null)
                    {
                        var fromJson = validationType.GetMethod("FromJson");
                        var validator = fromJson.Invoke(null, new object[] { validationDataStr });
                        _validation = validator;
                        _validate = validationType.GetMethod("Validate");
                    }
                }
            }
        }

        private void EnsureLibrary()
        {
            if (!_loaded)
            {
                return;
            }
            Logger.Info("checking library path: {0}", LibraryPath);
            if (LibraryPath != null && _library == null)
            {
                if (File.Exists(LibraryPath))
                {
                    Logger.Info("library path exists: {0}", LibraryPath);
                    try
                    {
                        var content = File.ReadAllText(LibraryPath);
                        var type = GetDataVisType("Infragistics.Controls.Description.CodeGenerationLibrary");

                        Logger.Info("checking for code generation library type");
                        if (type != null)
                        {
                            Logger.Info("code generation library type found");
                            var fromJson = type.GetMethod("FromJson");

                            Logger.Info("finding required library types and methods");

                            var itemType = GetDataVisType("Infragistics.Controls.Description.CodeGenerationLibraryItem");
                            var contentType = GetDataVisType("Infragistics.Controls.Description.CodeGenerationLibraryItemContent");

                            var inst = fromJson.Invoke(null, new object[] { content });
                            _library = inst;

                            _getLibaryItem = _library.GetType().GetMethod("GetItem");
                            _hasLibaryItem = _library.GetType().GetMethod("HasItem");
                            _getContent = itemType.GetMethod("GetContentForPlatformString");
                            _isJson = contentType.GetProperty("IsJson");
                            _libraryItemType = itemType.GetProperty("Type");
                            _content = contentType.GetProperty("Content");

                            _provideFromJson = _cr.GetType().GetMethod("ProvideRefValueFromJson");
                            _provideRefValue = _cr.GetType().GetMethod("ProvideRefValue");
                        }
                    }
                    catch (Exception ex)
                    {
                        Logger.Error(ex, "issue initializing library");
                    }
                }
            }
        }

        private string _currentJson;
        private object _context;
        private object _library;
        private MethodInfo _getLibaryItem;
        private MethodInfo _hasLibaryItem;
        private MethodInfo _getContent;
        private PropertyInfo _isJson;
        private PropertyInfo _libraryItemType;
        private PropertyInfo _content;
        private MethodInfo _provideFromJson;
        private MethodInfo _provideRefValue;
#if !WINDOWS_UWP
        private List<Assembly> _assemblies = new List<Assembly>();
#endif

        public List<Assembly> GetIgAssemblies()
        {
#if !WINDOWS_UWP
            return _assemblies;
#else
            List<Assembly> ret = new List<Assembly>();
            foreach (var assm in AppDomain.CurrentDomain.GetAssemblies())
            {
                if (assm.FullName.Contains("Infragistics"))
                {
                    ret.Add(assm);
                }

            }
            return ret;
#endif
        }


        public string LoadJson(string json)
        {
            _currentJson = json;
            _loadJson.Invoke(_cr, new object[] { json, (Func<string, Panel>)GetContainer });
            if (_getMissing != null)
            {
                var missing = (string[])_getMissing.Invoke(_cr, new object[] { });
                if (missing != null)
                {
                    Logger.Info("some refs are missing, checking library if available");
                    for (var i = 0; i < missing.Length; i++)
                    {
                        if (_library != null)
                        {
                            Logger.Info("library is available");
                            Logger.Info("checking library for key: {0}", missing[i]);
                            if ((bool)_hasLibaryItem.Invoke(_library, new object[] { missing[i] }))
                            {
                                Logger.Info("library has item for key: {0}", missing[i]);
                                var item = _getLibaryItem.Invoke(_library, new object[] { missing[i] });
                                var content = _getContent.Invoke(item, new object[] { "WPF" });
                                if (_libraryItemType.GetValue(item).ToString() == "Data")
                                {
                                    Logger.Info("library item {0} is a data item", missing[i]);
                                    var isJson = (bool)_isJson.GetValue(content);
                                    if (isJson)
                                    {
                                        Logger.Info("library item {0} is json data", missing[i]);
                                        _provideFromJson.Invoke(_cr, new object[] {
                                        _mainContent,
                                        missing[i],
                                        (string)_content.GetValue(content)
                                    });
                                    }
                                }
                                if (_libraryItemType.GetValue(item).ToString() == "EventHandler")
                                {
                                    Logger.Info("library item {0} is an event handler", missing[i]);
                                    var isJson = (bool)_isJson.GetValue(content);
                                    if (isJson)
                                    {
                                        var handlerContent = (string)_content.GetValue(content);
                                        var contentJObj = JObject.Parse(handlerContent);
                                        var handler = contentJObj.GetValue("handler").Value<string>();
                                        var imports = contentJObj.GetValue("imports").Value<string>();
                                        Logger.Info("obtaining compiler handler for item {0}", missing[i]);
                                        var actualHandler = GetCompiledHandler(missing[i], handler, imports);
                                        _provideRefValue.Invoke(_cr, new object[] {
                                            _mainContent,
                                            missing[i],
                                            actualHandler });
                                    }
                                }
                            }
                        }
                    }
                }
            }

            if (_validation != null)
            {
                return (string)_validate.Invoke(_validation, new object[] { json });
            }
            return null;
        }

        private Dictionary<string, object> _dynamicHandlers = new Dictionary<string, object>();
        private object _validation;
        private MethodInfo _validate;

        private object GetCompiledHandler(string key, string handler, string imports)
        {
            if (_dynamicHandlers.ContainsKey("key"))
            {
                Logger.Info("event handler library item {0} is already compiled", key);
                return _dynamicHandlers[key];
            }

            Type delegateType = typeof(Action);
            using (var sr = new StringReader(handler))
            {
                var line = sr.ReadLine();
                while (line != null)
                {
                    if (line.Trim().StartsWith("//WPF:"))
                    {
                        line = line.Replace("//WPF:", "").Trim();
                        Logger.Info("searching for wpf delegate type: {0}", line);
                        foreach (var assm in GetIgAssemblies())
                        {
                            foreach (var t in assm.GetTypes())
                            {
                                if (t.Name == line || t.FullName == line)
                                {
                                    Logger.Info("found wpf delegate type: {0}", line);
                                    delegateType = t;
                                    break;
                                }
                            }
                        }
                    }
                    line = sr.ReadLine();
                }
            }

            List<MetadataReference> references = new List<MetadataReference>();
            HashSet<string> added = new HashSet<string>();
            foreach (var assm in GetIgAssemblies())
            {
                SpiderReferences(references, added, assm);
            }

            var referencesArray = references.ToArray();

            var helperRegex = new Regex(@"CodeGenHelper.GetDescription<([^\]]+)>\(\""([^\""]*)""\)");
            handler = helperRegex.Replace(handler, @"GetDescription<$1>(""$2"")");

            var code = $@"
{imports}

public class HandlerHolder
{{
    public HandlerHolder(System.Func<string, object> getDescription)
    {{
        _getDescription = getDescription;
    }}

    private System.Func<string, object> _getDescription;

    private T GetDescription<T>(string descriptionName)
    {{
        return (T)_getDescription(descriptionName);
    }}

    {handler}   
}}
";
            Logger.Info("creating compilation");
            var compilation = CSharpCompilation.Create(
                Path.GetRandomFileName(),
                new[] { CSharpSyntaxTree.ParseText(code) },
                references,
                new CSharpCompilationOptions(OutputKind.DynamicallyLinkedLibrary)
            );

            using (var ms = new MemoryStream())
            {
                Logger.Info("emitting compilation");
                var compilationResult = compilation.Emit(ms);
                if (!compilationResult.Success)
                {
                    Logger.Error("compilation was not successful");
                    var errors = compilationResult.Diagnostics.Where(
                        diagnostic => diagnostic.IsWarningAsError ||
                        diagnostic.Severity == DiagnosticSeverity.Error);

                    Logger.Error("errors compiling dynamic library handler");
                    foreach (Diagnostic error in errors)
                    {
                        Logger.Error($"error {error.Id}: {error.GetMessage()}");
                    }

                    return null;
                }
                else
                {
                    Logger.Info("dynamic assembly compiled.");
                    ms.Seek(0, SeekOrigin.Begin);
                    Assembly dynamicAssymbly = Assembly.Load(ms.ToArray());

                    var handlerType = dynamicAssymbly.GetType("HandlerHolder");
                    var holder = Activator.CreateInstance(handlerType, new object[] { (Func<string, object>)this.GetDescription });
                    var methInfo = handlerType.GetMethod(key);
                    Logger.Info("obtaining handler for {0}", key);
                    _dynamicHandlers[key] = Delegate.CreateDelegate(delegateType, holder, key);

                    return _dynamicHandlers[key];
                }

            }
        }

        private void SpiderReferences(List<MetadataReference> references, HashSet<string> added, Assembly assembly)
        {
            Logger.Trace("spidering references for {0}", assembly);
            if (!added.Contains(assembly.FullName))
            {
                added.Add(assembly.FullName);
                Logger.Trace("adding metdata reference for location: {0}", assembly.Location);
                references.Add(MetadataReference.CreateFromFile(assembly.Location));
            }
            var refs = assembly.GetReferencedAssemblies();
            foreach (var refr in refs)
            {
                var refAssm = Assembly.Load(refr);
                if (!added.Contains(refAssm.FullName))
                {
                    SpiderReferences(references, added, refAssm);
                }
            }
        }

        private object GetDescription(string descriptionName)
        {
            return GetContainer(descriptionName).Children.Count > 0 ? GetContainer(descriptionName).Children[0] : null;
        }

        public string GenerateProject(string targetPath, string currentTemplate)
        {
            Logger.Info("generating project in: " + targetPath);
            try
            {
                //CodeGeneratingComponentRenderer cr = new CodeGeneratingComponentRenderer(
                //    CodeGenerationTargetPlatforms.WPF,
                //    new CodeGenerationRendererOptions()
                //    {
                //        GenerateFullProject = true
                //    },
                //    Dispatcher
                //    );
                //RegisterAllModules(cr.Context);
                var type = GetDataVisType("Infragistics.Controls.Description.CodeGeneratingComponentRenderer");
                var platEnum = GetDataVisType("Infragistics.Controls.Description.CodeGenerationTargetPlatforms");
                var optionsType = GetDataVisType("Infragistics.Controls.Description.CodeGenerationRendererOptions");
                var options = Activator.CreateInstance(optionsType);
                if (_library != null)
                {
                    var libraryProp = optionsType.GetProperty("Library");
                    libraryProp.SetValue(options, _library);
                }
                var fullProjectProp = optionsType.GetProperty("GenerateFullProject");
                fullProjectProp.SetValue(options, true);
                var plat = GetPlatform(platEnum, currentTemplate);
                var gen = Activator.CreateInstance(type,
                    plat,
                    options,
                    Dispatcher
                    );
                var context = gen.GetType().GetProperty("Context").GetValue(gen);
                foreach (var a in AppDomain.CurrentDomain.GetAssemblies())
                {
                    if (a.GetName().Name.StartsWith("Infragistics"))
                    {
                        foreach (var m in a.GetModules())
                        {
                            var types = m.GetType();
                        }
                    }
                    if (a.GetName().Name.StartsWith("Infragistics") && a.GetName().Name.Contains("DataVisualization"))
                    {
                        foreach (var m in a.GetModules())
                        {
                            foreach (var t in m.GetTypes())
                            {
                                if (t.Name.EndsWith("DescriptionModule"))
                                {
                                    var reg = t.GetMethod("Register");
                                    if (reg != null)
                                    {
                                        reg.Invoke(null, new object[] { context });
                                    }
                                }
                            }
                        }
                    }
                }

                //CodeGenerationFolderTemplate template = new CodeGenerationFolderTemplate();
                //template.LoadTemplate(@"C:\work\NetAdvantage\DEV\XPlatform\2020.2\Source\XPlatSamplesProjectTemplates\WPF\main-template");

                //cr.LoadCodeJson(jsonText);
                //var res = cr.EmitCode(template);

                //template.SaveOutput("temp");

                var folderTemplate = GetDataVisType("Infragistics.Controls.Description.CodeGenerationFolderTemplate");
                var template = Activator.CreateInstance(folderTemplate);
                var loadTemplate = folderTemplate.GetMethod("LoadTemplate");
                loadTemplate.Invoke(template, new object[] { currentTemplate });

                var loadCodeJson = type.GetMethod("LoadCodeJson");
                loadCodeJson.Invoke(gen, new object[] { _currentJson });
                var emitCode = type.GetMethod("EmitCode");
                var res = emitCode.Invoke(gen, new object[] { template });

                var saveOutput = folderTemplate.GetMethod("SaveOutput");
                saveOutput.Invoke(template, new object[] { targetPath });

                return null;
            }
            catch (Exception ex)
            {
                Logger.Error(ex, "generating project failed: ");
                return ex.ToString();
            }
        }

        private object GetPlatform(Type platEnum, string currentTemplate)
        {
            var di = new DirectoryInfo(currentTemplate);
            var parent = di.Parent;
            var parentName = parent.Name;
            var fields = platEnum.GetFields();
            foreach (var field in fields)
            {
                if (field.Name.ToLower() == parentName.ToLower())
                {
                    return field.GetValue(null);
                }
            }
            throw new InvalidOperationException("can't find platform for template: " + currentTemplate);
        }

        private Panel GetContainer(string id)
        {
            if (id == "content")
            {
                return _mainContent;
            }
            if (id == "legend")
            {
                return _legendContent;
            }
            if (id == "editor")
            {
                return _propertyEditor;
            }
            return _mainContent;
        }

        public bool CheckReady()
        {
            return _loadJson != null;
        }

        internal string UpdateSchema(string targetPath)
        {
            Logger.Info("updating schema: " + targetPath);
            try
            {
                var type = GetDataVisType("Infragistics.Controls.Description.JsonSchemaEmitter");
                if (type != null)
                {
                    var types = type.Assembly.GetTypes();
                    var emitter = Activator.CreateInstance(type, new object[] { types, _library });

                    var res = emitter.ToString();
                    File.WriteAllText(targetPath, res);
                }
                else
                {
                    Logger.Warn("this version can't emit a wpf schema");
                }
                type = GetDataVisType("Infragistics.Controls.Description.JsonValidator");
                if (type != null)
                {
                    var types = type.Assembly.GetTypes();
                    var validationData = Activator.CreateInstance(type, new object[] { types });

                    var res = (string)validationData.GetType().GetMethod("ToJson").Invoke(validationData, new object[] { });
                    var directory = Path.GetDirectoryName(targetPath);
                    var dataTarget = Path.Combine(directory, "validationData.json");
                    File.WriteAllText(dataTarget, res);
                }
                else
                {
                    Logger.Warn("this version can't emit validation data");
                }
                return null;
            }
            catch (Exception ex)
            {
                Logger.Error(ex, "updating schema failed: ");
                return ex.ToString();
            }
            //JsonSchemaEmitter emitter = new JsonSchemaEmitter(typeof(Description).Assembly.GetTypes());
            //var res = emitter.ToString();
        }

        public string UpdateLibrary(string libraryPath, string libraryJsonFile)
        {
            Logger.Info("updating library: " + libraryPath);
            try
            {
                var type = GetDataVisType("Infragistics.Controls.Description.CodeGenerationLibrary");
                var fromFolder = type.GetMethod("FromFolder");
                var inst = fromFolder.Invoke(null, new object[] { libraryPath });
                _library = inst;

                var toJson = type.GetMethod("ToJson");
                var output = (string)toJson.Invoke(inst, new object[] { });

                File.WriteAllText(libraryJsonFile, output);
                return null;
            }
            catch (Exception ex)
            {
                Logger.Error(ex, "updating schema failed: ");
                return ex.ToString();
            }
        }
    }

}
