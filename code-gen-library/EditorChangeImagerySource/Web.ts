//begin imports
import { IgcPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-webcomponents-layouts';
import { IgcGeographicMapComponent } from 'igniteui-webcomponents-maps';
import { IgcArcGISOnlineMapImagery, IgcOpenStreetMapImagery } from 'igniteui-webcomponents-maps';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class EditorChangeImagerySource {

    //begin eventHandler
    public editorChangeImagerySource(sender: any, args: IgcPropertyEditorPropertyDescriptionChangedEventArgs): void {
        var map = CodeGenHelper.getDescription<IgcGeographicMapComponent>("content");
        var name = args.newValue.toString();
        if (name === "OpenStreetMaps") {
            map.backgroundContent = new IgcOpenStreetMapImagery();
        } else {
            var imagery = new IgcArcGISOnlineMapImagery();
            imagery.mapServerUri = name;
            map.backgroundContent = imagery;
        }
    }
    //end eventHandler
}
