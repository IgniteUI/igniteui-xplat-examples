using IgniteUI.Blazor.Controls;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using RendererTemplate;

var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");

builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });

var types = new List<Type>();
            foreach (var type in typeof(IgbCategoryChartModule).Assembly.GetTypes())
            {
                if (type.Name.EndsWith("Module") && !type.Name.EndsWith("DescriptionModule"))
                {
                    if (type.Name != "IgbArcGISOnlineMapImageryModule" &&
                        !type.Name.StartsWith("IgbDocumentsCore") &&
                        !type.Name.StartsWith("IgbExcel") &&
                        !type.Name.StartsWith("IgbSpreadsheet") &&
                        !type.Name.StartsWith("IgbUndo"))
                    {
                        types.Add(type);
                    }
                }
            }

            foreach (var t in types)
            {
                Console.WriteLine(t.Name);
            }

builder.Services.AddIgniteUIBlazor(
                types.ToArray()
               //typeof(IgbDataChartCategoryModule),
               //typeof(IgbDataChartInteractivityModule),
               //typeof(IgbDataGridModule),
               //typeof(IgbGridModule),
               //typeof(IgbColumnModule),
               //typeof(IgbInputModule),
               //typeof(IgbCategoryChartModule),
               //typeof(IgbButtonModule),
               //typeof(IgbBadgeModule),
               //typeof(IgbPieChartModule)
           );

await builder.Build().RunAsync();
