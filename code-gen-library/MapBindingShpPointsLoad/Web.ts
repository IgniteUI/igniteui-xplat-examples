//begin imports
import { IgcShapeDataSource, GlobalQueuedWorkState } from 'igniteui-webcomponents-core';
import { IgcGeographicMapComponent } from 'igniteui-webcomponents-maps';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';
// Declared by the MapMultipleShapesReaders supporting item, which this item requires: in a generated sample
// those declarations are written beside the component, so there is no import of them there.
import { MapMultipleShapesReaders } from '../MapMultipleShapesReaders/Web';

export class MapBindingShpPointsLoad {

    //begin eventHandler
    /**
     * A shapefile is fetched and parsed asynchronously, so the source is given the method that
     * turns its records into data when they arrive — a method of the supporting item this one
     * requires.
     */
    public mapBindingShpPointsLoad(): void {
        var root = "https://static.infragistics.com/xplatform/shapes/";
        var readers = CodeGenHelper.getSharedSupporting<MapMultipleShapesReaders>("MapMultipleShapesReaders");
        var map = CodeGenHelper.getDescription<IgcGeographicMapComponent>("content");

        var sds = new IgcShapeDataSource();
        const work = GlobalQueuedWorkState.instance;
        const channel = "Sample.MapBindingShpPointsLoad.Import";
        work.notifyWorkQueued(channel);
        sds.importCompleted = (s: IgcShapeDataSource, e: any) => {
            try { readers.readPoints(s, e, map); }
            finally { work.notifyWorkCompleted(channel); }
        };
        sds.shapefileSource = root + "WorldCities.shp";
        sds.databaseSource = root + "WorldCities.dbf";
        sds.dataBind();
    }
    //end eventHandler
}
