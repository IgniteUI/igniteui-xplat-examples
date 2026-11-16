//begin imports
import { IgcPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-webcomponents-layouts';
import { IgcGeographicMapComponent, IgcAzureMapsImagery, AzureMapsImageryStyle } from 'igniteui-webcomponents-maps';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class EditorChangeAzureImageryStyle {

    //begin eventHandler
    public editorChangeAzureImageryStyle(sender: any, args: IgcPropertyEditorPropertyDescriptionChangedEventArgs): void {
        var map = CodeGenHelper.getDescription<IgcGeographicMapComponent>("content");
        var imagery = map.backgroundContent as IgcAzureMapsImagery;
        var style = AzureMapsImageryStyle[args.newValue.toString() as keyof typeof AzureMapsImageryStyle];
        if (imagery && style !== undefined) {
            imagery.imageryStyle = style;
        }
    }
    //end eventHandler
}
