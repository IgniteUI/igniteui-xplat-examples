//begin imports
import { IgcShapeDataSource } from 'igniteui-webcomponents-core';
//end imports

export class MapMultipleShapesLoad {

    //begin eventHandler
    /**
     * Three shapefiles, each read into the series that draws it. A shapefile is fetched and parsed
     * asynchronously, so each source is given the method that turns its records into data when it
     * arrives — those are the items listed alongside this one.
     */
    public mapMultipleShapesLoad(): void {
        var root = "https://static.infragistics.com/xplatform/shapes/";

        var sdsPolygons = new IgcShapeDataSource();
        sdsPolygons.importCompleted = this.mapMultipleShapesPolygons;
        sdsPolygons.shapefileSource = root + "WorldCountries.shp";
        sdsPolygons.databaseSource = root + "WorldCountries.dbf";
        sdsPolygons.dataBind();

        var sdsPolylines = new IgcShapeDataSource();
        sdsPolylines.importCompleted = this.mapMultipleShapesPolylines;
        sdsPolylines.shapefileSource = root + "WorldConnections.shp";
        sdsPolylines.databaseSource = root + "WorldConnections.dbf";
        sdsPolylines.dataBind();

        var sdsLocations = new IgcShapeDataSource();
        sdsLocations.importCompleted = this.mapMultipleShapesPoints;
        sdsLocations.shapefileSource = root + "WorldCities.shp";
        sdsLocations.databaseSource = root + "WorldCities.dbf";
        sdsLocations.dataBind();
    }
    //end eventHandler
}
