//begin imports
import { IgcPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-webcomponents-layouts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

// Declared by the MapAzureImageryApiKey supporting item, which this item requires: in a generated
// sample that type is written beside the component, so there is no import of it there.
import { MapAzureImageryApiKey } from '../MapAzureImageryApiKey/Web';

export class EditorChangeAzureImageryApiKey {

    //begin eventHandler
    public editorChangeAzureImageryApiKey(sender: any, args: IgcPropertyEditorPropertyDescriptionChangedEventArgs): void {
        var apiKey = CodeGenHelper.getSharedSupporting<MapAzureImageryApiKey>("MapAzureImageryApiKey");
        apiKey.key = args.newValue ? args.newValue.toString().trim() : "";
    }
    //end eventHandler
}
