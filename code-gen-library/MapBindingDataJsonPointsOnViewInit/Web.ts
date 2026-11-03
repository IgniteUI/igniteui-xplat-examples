//begin imports
import { IgcGeographicMapComponent, IgcGeographicSymbolSeriesComponent } from 'igniteui-webcomponents-maps';
import { MarkerType } from 'igniteui-webcomponents-charts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class MapBindingDataJsonPointsOnViewInit {

    //begin eventHandler
    public mapBindingDataJsonPointsOnViewInit(): void {
        var map = CodeGenHelper.getDescription<IgcGeographicMapComponent>("content");
        var url = "https://static.infragistics.com/xplatform/data/WorldCities.json";
        fetch(url)
            .then((response) => response.json())
            .then((data: any[]) => {
                var geoLocations: any[] = [];
                // parsing JSON data and using only cities that are capitals
                for (var item of data) {
                    if (!item.cap) continue;
                    // the series binds to member names, so each item is projected onto them --
                    // the shape the other platforms give a type of its own
                    geoLocations.push({
                        latitude: item.lat,
                        longitude: item.lon,
                        population: item.pop,
                        city: item.name,
                        country: item.country
                    });
                }
                var series = new IgcGeographicSymbolSeriesComponent();
                series.dataSource = geoLocations;
                series.latitudeMemberPath = "latitude";
                series.longitudeMemberPath = "longitude";
                series.markerBrush = "rgba(255, 255, 255, 1.0)";
                series.markerOutline = "rgba(135, 5, 255, 1.0)";
                series.markerThickness = 1;
                series.markerType = MarkerType.Circle;
                map.series.add(series);
            });
    }
    //end eventHandler
}
