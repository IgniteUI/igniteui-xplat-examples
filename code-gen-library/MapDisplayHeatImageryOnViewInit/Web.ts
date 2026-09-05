//begin imports
import { IgcGeographicMapComponent, IgcGeographicTileSeriesComponent, IgcTileGeneratorMapImagery } from 'igniteui-webcomponents-maps';
import { IgcHeatTileGenerator, IgcShapeDataSource } from 'igniteui-webcomponents-core';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class MapDisplayHeatImageryOnViewInit {

    //begin eventHandler
    public mapDisplayHeatImageryOnViewInit(): void {
        var map = CodeGenHelper.getDescription<IgcGeographicMapComponent>("content");
        map.zoomToGeographic({ left: -134.5, top: 16.0, width: 70.0, height: 37.0 });

        var root = "https://static.infragistics.com/xplatform/shapes/";

        var sds = new IgcShapeDataSource();
        sds.importCompleted = () => {
            var latitudes: number[] = [];
            var longitudes: number[] = [];
            var populations: number[] = [];
            // parsing shapefile data and creating geographic locations
            var pointData = sds.getPointData();
            for (var i = 0; i < pointData.length; i++) {
                var record = pointData[i];
                for (var j = 0; j < record.points.length; j++) {
                    var pointsList = record.points[j];
                    for (var k = 0; k < pointsList.length; k++) {
                        latitudes.push(pointsList[k].y);
                        longitudes.push(pointsList[k].x);
                    }
                }
                // using field/column names from .DBF file
                var value = record.fieldValues["POP_2010"];
                populations.push(value >= 0 ? value : 0);
            }

            // the heat map's tiles are generated from the three parallel arrays: where each
            // reading is, and how large it is
            // generating heat map imagery tiles
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
            // bundler, so the topic shows it separately — and workers are turned off here to
            // match, since the generator asks for one by default and throws when neither a script
            // path nor an instance was given.
            gen.useWebWorkers = false;

            var tileImagery = new IgcTileGeneratorMapImagery();
            tileImagery.tileGenerator = gen;

            // generating heat map series
            var series = new IgcGeographicTileSeriesComponent();
            series.tileImagery = tileImagery;
            // adding the heat map series to the map
            map.series.add(series);
        };
        sds.shapefileSource = root + "AmericanCities.shp";
        sds.databaseSource = root + "AmericanCities.dbf";
        sds.dataBind();
    }
    //end eventHandler
}
