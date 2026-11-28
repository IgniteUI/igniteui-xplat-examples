//begin imports
import { IgcGeographicMapComponent } from 'igniteui-webcomponents-maps';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';
import { MapDensityCsvData } from '../MapDensityCsvData/Web';

export class MapTypeScatterDensitySeriesOnViewInit {

    //begin eventHandler
    public mapTypeScatterDensitySeriesOnViewInit(): void {
        const map = CodeGenHelper.getDescription<IgcGeographicMapComponent>('content');
        const loader = CodeGenHelper.getSharedSupporting<MapDensityCsvData>('MapDensityCsvData');
        loader.load(map, 'https://static.infragistics.com/xplatform/data/AusPlaces.csv',
            2, 1, { left: 110, top: -45, width: 45, height: 35 },
            'Sample.MapTypeScatterDensitySeriesOnViewInit.Load');
    }
    //end eventHandler
}
