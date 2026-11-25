//begin imports
import { IgxPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-angular-layouts';
import { IgxGeographicMapComponent, IgxGeographicMapImagery, IgxArcGISOnlineMapImagery, IgxOpenStreetMapImagery } from 'igniteui-angular-maps';
//end imports

import { CodeGenHelper } from 'igniteui-angular-core';

export class MapOfflineImagerySourceChanged {
    //begin eventHandler
    public mapOfflineImagerySourceChanged(sender: any, args: IgxPropertyEditorPropertyDescriptionChangedEventArgs): void {
        const map = CodeGenHelper.getDescription<IgxGeographicMapComponent>("content");
        const response = CodeGenHelper.findByName<any>("MapOfflineImageryResponse");
        if (typeof response !== "function") throw new Error("The sidecar's offline imagery response handler is not bound.");
        const source = args.newValue.toString();
        const imagery: IgxGeographicMapImagery = source === "OpenStreetMaps"
            ? new IgxOpenStreetMapImagery() : new IgxArcGISOnlineMapImagery();
        imagery.isDryRun = true;
        imagery.dryRunRequest.subscribe(event => response(event.sender, event.args));
        if (imagery instanceof IgxArcGISOnlineMapImagery) imagery.mapServerUri = source;
        map.backgroundContent = imagery;
    }
    //end eventHandler
}
