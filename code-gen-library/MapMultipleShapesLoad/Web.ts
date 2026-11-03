//begin imports
import { IgcShapeDataSource } from 'igniteui-webcomponents-core';
import { IgcGeographicMapComponent } from 'igniteui-webcomponents-maps';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';
// Declared by the MapMultipleShapesReaders supporting item, which this item requires: in a generated
// sample those declarations are written beside the component, so there is no import of them there.
import { MapMultipleShapesReaders } from '../MapMultipleShapesReaders/Web';

export class MapMultipleShapesLoad {

    //begin eventHandler
    /**
     * Three shapefiles, each read into the series that draws it. A shapefile is fetched and parsed
     * asynchronously, so each source is given the method that turns its records into data when it
     * arrives — those methods belong to the supporting item this one requires.
     */
    public mapMultipleShapesLoad(): void {
        var root = "https://static.infragistics.com/xplatform/shapes/";
        var readers = CodeGenHelper.getSharedSupporting<MapMultipleShapesReaders>("MapMultipleShapesReaders");
        var map = CodeGenHelper.getDescription<IgcGeographicMapComponent>("content");

        var sdsPolygons = new IgcShapeDataSource();
        sdsPolygons.importCompleted = (s: IgcShapeDataSource, e: any) => readers.readPolygons(s, e, map);
        sdsPolygons.shapefileSource = root + "WorldCountries.shp";
        sdsPolygons.databaseSource = root + "WorldCountries.dbf";
        sdsPolygons.dataBind();

        var sdsPolylines = new IgcShapeDataSource();
        sdsPolylines.importCompleted = (s: IgcShapeDataSource, e: any) => readers.readPolylines(s, e, map);
        sdsPolylines.shapefileSource = root + "WorldCableRoutes.shp";
        sdsPolylines.databaseSource = root + "WorldCableRoutes.dbf";
        sdsPolylines.dataBind();

        var sdsLocations = new IgcShapeDataSource();
        sdsLocations.importCompleted = (s: IgcShapeDataSource, e: any) => readers.readPoints(s, e, map);
        sdsLocations.shapefileSource = root + "WorldCities.shp";
        sdsLocations.databaseSource = root + "WorldCities.dbf";
        sdsLocations.dataBind();
    }
    //end eventHandler
}
