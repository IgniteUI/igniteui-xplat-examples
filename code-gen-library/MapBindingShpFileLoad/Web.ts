//begin imports
import { IgcShapeDataSource } from 'igniteui-webcomponents-core';
//end imports

export class MapBindingShpFileLoad {

    //begin eventHandler
    /**
     * A shapefile is fetched and parsed asynchronously, so the source is given the method that
     * turns its records into data when they arrive — the item listed alongside this one.
     */
    public mapBindingShpFileLoad(): void {
        var root = "https://static.infragistics.com/xplatform/shapes/";

        var sds = new IgcShapeDataSource();
        sds.importCompleted = this.mapBindingShpFileRoutes;
        sds.shapefileSource = root + "WorldCableRoutes.shp";
        sds.databaseSource = root + "WorldCableRoutes.dbf";
        sds.dataBind();
    }
    //end eventHandler
}
