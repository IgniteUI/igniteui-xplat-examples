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
                for (var item of data) {
                    if (!item.cap) continue;
                    geoLocations.push(item);
                }
                var series = new IgcGeographicSymbolSeriesComponent();
                series.dataSource = geoLocations;
                series.latitudeMemberPath = "lat";
                series.longitudeMemberPath = "lon";
                series.markerBrush = "rgba(255, 255, 255, 1.0)";
                series.markerOutline = "rgba(135, 5, 255, 1.0)";
                series.markerThickness = 1;
                series.markerType = MarkerType.Circle;
                map.series.add(series);
            });
    }
    //end eventHandler
}
