//begin imports
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-webcomponents-layouts';
import { IgcGeographicMapComponent, IgcAzureMapsImagery } from 'igniteui-webcomponents-maps';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

// Declared by the MapAzureImageryApiKey supporting item, which this item requires: in a generated
// sample that type is written beside the component, so there is no import of it there.
import { MapAzureImageryApiKey } from '../MapAzureImageryApiKey/Web';

export class EditorButtonAzureImagerySetApiKey {

    //begin eventHandler
    public editorButtonAzureImagerySetApiKey(sender: any, args: IgcPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        var apiKey = CodeGenHelper.getSharedSupporting<MapAzureImageryApiKey>("MapAzureImageryApiKey");
        var map = CodeGenHelper.getDescription<IgcGeographicMapComponent>("content");
        var imagery = map.backgroundContent as IgcAzureMapsImagery;
        if (imagery && apiKey.key) {
            imagery.apiKey = apiKey.key;
        }
    }
    //end eventHandler
}
