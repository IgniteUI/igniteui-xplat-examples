//begin imports

//end imports

// Declared by the CategoryChartFrequencyData supporting item, which this item requires: in a
// generated sample that type is written beside the component, so there is no import of it there.
import { CategoryChartFrequency } from '../CategoryChartFrequencyData/Web';

export class CategoryChartHighFrequencyOnViewInit {

    //begin eventHandler
    public categoryChartHighFrequencyOnViewInit(): void {
        CategoryChartFrequency.generate();
        CategoryChartFrequency.restartTimer();
    }
    //end eventHandler
}
