//begin imports
import { IgcPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-webcomponents-layouts';
import { IgcGeographicMapComponent, IgcGeographicTileSeriesComponent, IgcAzureMapsImagery } from 'igniteui-webcomponents-maps';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class EditorChangeAzureMapsApiKey {

    //begin eventHandler
    public editorChangeAzureMapsApiKey(sender: any, args: IgcPropertyEditorPropertyDescriptionChangedEventArgs): void {
        // One key, two places that need it. The overlay styles -- traffic, labels, hybrids -- draw
        // over a base map rather than replacing it, so the sample keeps a background imagery beneath
        // the tile series, and Azure asks both of them for the same key.
        var key = args.newValue == null ? "" : args.newValue.toString();
        var map = CodeGenHelper.getDescription<IgcGeographicMapComponent>("content");
        var series = CodeGenHelper.getDescription<IgcGeographicTileSeriesComponent>("imagerySeries");

        var background = map.backgroundContent as IgcAzureMapsImagery;
        if (background != null) {
            background.apiKey = key;
        }
        var overlay = series.tileImagery as IgcAzureMapsImagery;
        if (overlay != null) {
            overlay.apiKey = key;
        }
    }
    //end eventHandler
}
