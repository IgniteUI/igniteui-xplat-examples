//begin imports
import { IgcGeographicMapComponent, IgcGeographicTileSeriesComponent, IgcTileGeneratorMapImagery } from 'igniteui-webcomponents-maps';
import { IgcHeatTileGenerator } from 'igniteui-webcomponents-core';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class MapDisplayHeatImageryOnViewInit {

    //begin eventHandler
    public mapDisplayHeatImageryOnViewInit(): void {
        var map = CodeGenHelper.getDescription<IgcGeographicMapComponent>("content");
        map.zoomToGeographic({ left: -134.5, top: 16.0, width: 70.0, height: 37.0 });

        var url = "https://static.infragistics.com/xplatform/data/UsaCitiesPopulation.csv";
        fetch(url)
            .then((response) => response.text())
            .then((csvData: string) => {
                var csvLines = csvData.split("\n");
                var latitudes: number[] = [];
                var longitudes: number[] = [];
                var populations: number[] = [];
                for (var i = 1; i < csvLines.length; i++) {
                    var columns = csvLines[i].split(",");
                    if (columns.length < 4) continue;
                    latitudes.push(Number(columns[1]));
                    longitudes.push(Number(columns[2]));
                    populations.push(Number(columns[3]));
                }

                // the heat map's tiles are generated from the three parallel arrays: where each
                // reading is, and how large it is
                var gen = new IgcHeatTileGenerator();
                gen.xValues = longitudes;
                gen.yValues = latitudes;
                gen.values = populations;
                gen.blurRadius = 6;
                gen.maxBlurRadius = 20;
                gen.useBlurRadiusAdjustedForZoom = true;
                gen.minimumColor = "rgba(100, 255, 0, 0.5)";
                gen.maximumColor = "rgba(255, 255, 0, 0.5)";
                gen.useGlobalMinMax = true;
                gen.useGlobalMinMaxAdjustedForZoom = true;
                gen.useLogarithmicScale = true;
                gen.scaleColors = [
                    "rgba(0, 0, 255, .251)",
                    "rgba(0, 255, 255, .3765)",
                    "rgba(50, 205, 50, .2675)",
                    "rgba(255, 255, 0, .7059)",
                    "rgba(255, 0, 0, .7843)"
                ];
                // Generating the tiles on a worker keeps them off the thread the map draws on, which
                // is worth doing for a heat map of any size. Wiring one up is not the same on every
                // bundler, so the topic shows it separately and it is left out here.

                var tileImagery = new IgcTileGeneratorMapImagery();
                tileImagery.tileGenerator = gen;

                var series = new IgcGeographicTileSeriesComponent();
                series.tileImagery = tileImagery;
                map.series.add(series);
            });
    }
    //end eventHandler
}
