//begin imports
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-webcomponents-layouts';
import { IgcGeographicMapComponent, IgcAzureMapsImagery, AzureMapsImageryStyle } from 'igniteui-webcomponents-maps';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class EditorButtonAzureImageryDarkGrey {

    //begin eventHandler
    public editorButtonAzureImageryDarkGrey(sender: any, args: IgcPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        var map = CodeGenHelper.getDescription<IgcGeographicMapComponent>("content");
        var imagery = map.backgroundContent as IgcAzureMapsImagery;
        if (imagery) {
            imagery.imageryStyle = AzureMapsImageryStyle.DarkGrey;
        }
    }
    //end eventHandler
}
