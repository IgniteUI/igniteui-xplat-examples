//begin imports
import { IgcPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-webcomponents-layouts';
import { IgcGeographicMapComponent, IgcGeographicMapImagery, IgcArcGISOnlineMapImagery, IgcOpenStreetMapImagery } from 'igniteui-webcomponents-maps';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class MapOfflineImagerySourceChanged {
    //begin eventHandler
    public mapOfflineImagerySourceChanged(sender: any, args: IgcPropertyEditorPropertyDescriptionChangedEventArgs): void {
        const map = CodeGenHelper.getDescription<IgcGeographicMapComponent>("content");
        const response = CodeGenHelper.findByName<any>("MapOfflineImageryResponse");
        if (typeof response !== "function") throw new Error("The sidecar's offline imagery response handler is not bound.");
        const source = args.newValue.toString();
        const imagery: IgcGeographicMapImagery = source === "OpenStreetMaps"
            ? new IgcOpenStreetMapImagery() : new IgcArcGISOnlineMapImagery();
        imagery.isDryRun = true;
        imagery.dryRunRequest = response;
        if (imagery instanceof IgcArcGISOnlineMapImagery) imagery.mapServerUri = source;
        map.backgroundContent = imagery;
    }
    //end eventHandler
}
