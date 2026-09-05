//begin imports
import { IgcGeographicMapComponent, IgcGeographicHighDensityScatterSeriesComponent } from 'igniteui-webcomponents-maps';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class MapBindingDataCsvOnViewInit {

    //begin eventHandler
    public mapBindingDataCsvOnViewInit(): void {
        var map = CodeGenHelper.getDescription<IgcGeographicMapComponent>("content");
        var url = "https://static.infragistics.com/xplatform/data/UsaCitiesPopulation.csv";
        fetch(url)
            .then((response) => response.text())
            .then((csvData: string) => {
                var csvLines = csvData.split("\n");
                var geoLocations: any[] = [];
                // parsing CSV data and creating geographic locations
                for (var i = 1; i < csvLines.length; i++) {
                    var columns = csvLines[i].split(",");
                    if (columns.length < 4) continue;
                    geoLocations.push({
                        name: columns[0],
                        latitude: Number(columns[1]),
                        longitude: Number(columns[2]),
                        population: Number(columns[3])
                    });
                }
                // creating the series with the loaded data
                var series = new IgcGeographicHighDensityScatterSeriesComponent();
                series.name = "hdSeries";
                series.dataSource = geoLocations;
                series.latitudeMemberPath = "latitude";
                series.longitudeMemberPath = "longitude";
                series.heatMaximumColor = "Red";
                series.heatMinimumColor = "Black";
                series.heatMinimum = 0;
                series.heatMaximum = 5;
                series.pointExtent = 1;
                series.mouseOverEnabled = true;
                // adding the series to the geographic map
                map.series.add(series);

                // zooming to the bounds of the lower 48 states
                map.zoomToGeographic({
                    left: -130,
                    top: 15,
                    width: Math.abs(-130 + 65),
                    height: Math.abs(50 - 15)
                });
            });
    }
    //end eventHandler
}
