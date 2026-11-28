//begin imports
import { IgcGeographicMapComponent } from 'igniteui-webcomponents-maps';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';
import { MapDensityCsvData } from '../MapDensityCsvData/Web';

export class MapBindingDataCsvOnViewInit {

    //begin eventHandler
    public mapBindingDataCsvOnViewInit(): void {
        const map = CodeGenHelper.getDescription<IgcGeographicMapComponent>('content');
        const loader = CodeGenHelper.getSharedSupporting<MapDensityCsvData>('MapDensityCsvData');
        loader.load(map, 'https://static.infragistics.com/xplatform/data/UsaCitiesPopulation.csv',
            1, 2, { left: -130, top: 15, width: 65, height: 35 },
            'Sample.MapBindingDataCsvOnViewInit.Load', 3);
    }
    //end eventHandler
}
