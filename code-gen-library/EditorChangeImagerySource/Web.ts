//begin imports
import { IgcPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-webcomponents-layouts';
import { IgcGeographicMapComponent } from 'igniteui-webcomponents-maps';
import { IgcArcGISOnlineMapImageryComponent, IgcOpenStreetMapImageryComponent } from 'igniteui-webcomponents-maps';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class EditorChangeImagerySource {

    //begin eventHandler
    public editorChangeImagerySource(sender: any, args: IgcPropertyEditorPropertyDescriptionChangedEventArgs): void {
        var map = CodeGenHelper.getDescription<IgcGeographicMapComponent>("content");
        var name = args.newValue.toString();
        if (name === "OpenStreetMaps") {
            map.backgroundContent = new IgcOpenStreetMapImageryComponent();
        } else {
            var imagery = new IgcArcGISOnlineMapImageryComponent();
            imagery.mapServerUri = name;
            map.backgroundContent = imagery;
        }
    }
    //end eventHandler
}
