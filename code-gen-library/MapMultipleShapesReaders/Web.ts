//begin imports
import { IgcGeographicMapComponent, IgcGeographicShapeSeriesComponent, IgcGeographicPolylineSeriesComponent, IgcGeographicSymbolSeriesComponent } from 'igniteui-webcomponents-maps';
import { IgcShapeDataSource } from 'igniteui-webcomponents-core';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

//begin supportingTypes
/**
 * What each of the three shapefiles becomes once it has loaded: records turned into data, bound to the
 * series that draws them.
 *
 * These are handlers for a shape data source's importCompleted, and the source is created in code by
 * the item that requires this one — so there is nothing in a description to bind them to, and they are
 * not initializers either. A supporting item is what they are: a type asked for by name, whose methods
 * the loader wires up.
 */
export class MapMultipleShapesReaders {

    //begin readPolygons
    /** Country shapes, with the fields the tooltip shows taken from the .DBF file. */
    public readPolygons(sds: IgcShapeDataSource, e: any): void {
        var geoPolygons: any[] = [];
        var pointData = sds.getPointData();
        // parsing shapefile data and creating geo-polygons
        for (var i = 0; i < pointData.length; i++) {
            var record = pointData[i];
            // using field/column names from .DBF file
            geoPolygons.push({
                points: record.points,
                name: record.fieldValues.NAME,
                gdp: record.fieldValues.GDP,
                population: record.fieldValues.POPULATION
            });
        }

        var map = CodeGenHelper.getDescription<IgcGeographicMapComponent>("content");
        var shapeSeries = map.series.item(0) as IgcGeographicShapeSeriesComponent;
        shapeSeries.dataSource = geoPolygons;
    }
    //end readPolygons

    //begin readPolylines
    /** Connections between places, each record one path. */
    public readPolylines(sds: IgcShapeDataSource, e: any): void {
        var geoPolylines: any[] = [];
        var pointData = sds.getPointData();
        // parsing shapefile data and creating geo-polylines
        for (var i = 0; i < pointData.length; i++) {
            var record = pointData[i];
            // using field/column names from .DBF file
            geoPolylines.push({
                points: record.points,
                name: record.fieldValues.Name,
                capacity: record.fieldValues.CapacityG,
                distance: record.fieldValues.DistanceKM,
                isOverLand: record.fieldValues.OverLand === 0,
                isActive: record.fieldValues.NotLive !== 0,
                service: record.fieldValues.InService
            });
        }

        var map = CodeGenHelper.getDescription<IgcGeographicMapComponent>("content");
        var lineSeries = map.series.item(1) as IgcGeographicPolylineSeriesComponent;
        lineSeries.dataSource = geoPolylines;
    }
    //end readPolylines

    //begin readPoints
    /** Cities with a known population, one point per record. */
    public readPoints(sds: IgcShapeDataSource, e: any): void {
        var geoLocations: any[] = [];
        var pointData = sds.getPointData();
        // parsing shapefile data and creating geo-locations
        for (var i = 0; i < pointData.length; i++) {
            var record = pointData[i];
            var pop = record.fieldValues.POPULATION;
            if (pop > 0) {
                // each of these records holds a single point
                // using field/column names from .DBF file
                geoLocations.push({
                    latitude: record.points[0][0].y,
                    longitude: record.points[0][0].x,
                    city: record.fieldValues.NAME,
                    population: pop
                });
            }
        }

        var map = CodeGenHelper.getDescription<IgcGeographicMapComponent>("content");
        var symbolSeries = map.series.item(2) as IgcGeographicSymbolSeriesComponent;
        symbolSeries.dataSource = geoLocations;
    }
    //end readPoints
}
//end supportingTypes
