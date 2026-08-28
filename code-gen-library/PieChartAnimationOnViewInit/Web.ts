//begin imports
//end imports

// Declared by the PieChartAnimationUtility supporting item, which this item requires: in a generated
// sample that type is written beside the component, so there is no import of it there.
import { PieChartAnimation } from '../PieChartAnimationUtility/Web';

export class PieChartAnimationOnViewInit {

    //begin eventHandler
    public pieChartAnimationOnViewInit(): void {
        PieChartAnimation.start();
    }
    //end eventHandler
}
