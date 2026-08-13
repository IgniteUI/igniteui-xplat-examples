//begin imports
import { IgcShapeDataSource } from 'igniteui-webcomponents-core';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';
// Declared by the MapShpFileReaders supporting item, which this item requires: in a generated sample
// those declarations are written beside the component, so there is no import of them there.
import { MapShpFileReaders } from '../MapShpFileReaders/Web';

export class MapBindingShpFileLoad {

    //begin eventHandler
    /**
     * A shapefile is fetched and parsed asynchronously, so the source is given the method that
     * turns its records into data when they arrive — a method of the supporting item this one
     * requires.
     */
    public mapBindingShpFileLoad(): void {
        var root = "https://static.infragistics.com/xplatform/shapes/";
        var readers = CodeGenHelper.getSharedSupporting<MapShpFileReaders>("MapShpFileReaders");

        var sds = new IgcShapeDataSource();
        sds.importCompleted = (s: IgcShapeDataSource, e: any) => readers.readRoutes(s, e);
        sds.shapefileSource = root + "WorldCableRoutes.shp";
        sds.databaseSource = root + "WorldCableRoutes.dbf";
        sds.dataBind();
    }
    //end eventHandler
}
