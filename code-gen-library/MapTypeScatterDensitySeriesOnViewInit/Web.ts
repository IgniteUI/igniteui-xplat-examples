//begin imports
import { IgcGeographicMapComponent, IgcGeographicHighDensityScatterSeriesComponent } from 'igniteui-webcomponents-maps';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class MapTypeScatterDensitySeriesOnViewInit {

    //begin eventHandler
    public mapTypeScatterDensitySeriesOnViewInit(): void {
        var map = CodeGenHelper.getDescription<IgcGeographicMapComponent>("content");
        var url = "https://static.infragistics.com/xplatform/data/AusPlaces.csv";
        fetch(url)
            .then((response) => response.text())
            .then((csvData: string) => {
                var csvLines = csvData.split("\n");
                var geoLocations: any[] = [];
                for (var i = 1; i < csvLines.length; i++) {
                    var columns = csvLines[i].split(",");
                    if (columns.length < 3) continue;
                    geoLocations.push({
                        name: columns[0],
                        longitude: Number(columns[1]),
                        latitude: Number(columns[2])
                    });
                }
                var series = new IgcGeographicHighDensityScatterSeriesComponent();
                series.dataSource = geoLocations;
                series.longitudeMemberPath = "longitude";
                series.latitudeMemberPath = "latitude";
                series.heatMaximumColor = "Red";
                series.heatMinimumColor = "Black";
                series.heatMinimum = 0;
                series.heatMaximum = 5;
                series.pointExtent = 1;
                series.mouseOverEnabled = true;
                map.series.add(series);

                map.zoomToGeographic({ left: 110, top: -10, width: 45, height: -35 });
            });
    }
    //end eventHandler
}
