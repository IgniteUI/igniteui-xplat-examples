//begin imports
import { IgcCategoryChartComponent } from 'igniteui-webcomponents-charts';

//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

// Declared by the CategoryChartFrequencyData supporting item, which this item requires: in a
// generated sample that type is written beside the component, so there is no import of it there.
import { CategoryChartFrequency } from '../CategoryChartFrequencyData/Web';

export class CategoryChartHighFrequencyOnViewInit {

    //begin eventHandler
    public categoryChartHighFrequencyOnViewInit(): void {
        CategoryChartFrequency.generate(CodeGenHelper.getDescription<IgcCategoryChartComponent>("content"));
        CategoryChartFrequency.restartTimer(CodeGenHelper.getDescription<IgcCategoryChartComponent>("content"));
    }
    //end eventHandler
}
