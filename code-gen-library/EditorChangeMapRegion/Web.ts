//begin imports
import { IgcPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-webcomponents-layouts';
import { IgcGeographicMapComponent } from 'igniteui-webcomponents-maps';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class EditorChangeMapRegion {

    //begin eventHandler
    public mapRegions: any = {
        Australia: { left: 81.5, top: -52.0, width: 98.0, height: 56.0 },
        Caribbean: { left: -92.9, top: 5.4, width: 35.1, height: 25.8 },
        Egypt: { left: 19.3, top: 19.9, width: 19.3, height: 13.4 },
        European: { left: -36.0, top: 31.0, width: 98.0, height: 38.0 },
        Hawaii: { left: -161.2, top: 18.5, width: 6.6, height: 4.8 },
        Japan: { left: 122.7, top: 29.4, width: 27.5, height: 17.0 },
        Poland: { left: 13.0, top: 48.0, width: 11.0, height: 9.0 },
        SouthAfrica: { left: 9.0, top: -37.1, width: 26.0, height: 17.8 },
        UnitedKingdom: { left: -15.0, top: 49.5, width: 22.5, height: 8.0 },
        UnitedStates: { left: -134.5, top: 16.0, width: 70.0, height: 37.0 },
        Uruguay: { left: -62.1, top: -35.7, width: 10.6, height: 7.0 }
    };

    public editorChangeMapRegion(sender: any, args: IgcPropertyEditorPropertyDescriptionChangedEventArgs): void {
        var map = CodeGenHelper.getDescription<IgcGeographicMapComponent>("content");
        var name = args.newValue.toString();
        var region = this.mapRegions[name];
        if (region) {
            map.zoomToGeographic(region);
        }
    }
    //end eventHandler
}
