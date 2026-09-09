//begin imports
import { IgcCategoryChartComponent } from 'igniteui-webcomponents-charts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';
// Declared by the CategoryChartVolumeData supporting item, which this item requires: in a generated
// sample that type is written beside the component, so there is no import of it there.
import { CategoryChartVolumeData } from '../CategoryChartVolumeData/Web';

export class CategoryChartHighVolumeOnViewInit {

    //begin eventHandler
    public categoryChartHighVolumeOnViewInit(): void {
        var chart = CodeGenHelper.getDescription<IgcCategoryChartComponent>("content");
        chart.dataSource = CategoryChartVolumeData.generate(CategoryChartVolumeData.count);
    }
    //end eventHandler
}
