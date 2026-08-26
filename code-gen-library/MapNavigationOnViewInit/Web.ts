//begin imports
import { IgcGeographicMapComponent } from 'igniteui-webcomponents-maps';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class MapNavigationOnViewInit {

    //begin eventHandler
    public mapNavigationOnViewInit(): void {
        var map = CodeGenHelper.getDescription<IgcGeographicMapComponent>("content");
        var region = { left: -134.5, top: 16.0, width: 70.0, height: 37.0 };
        map.zoomToGeographic(region);
    }
    //end eventHandler
}
