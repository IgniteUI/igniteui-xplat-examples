//begin imports
//end imports

// Declared by the TestSupportingTypes supporting item, which this item requires.
import { TestSupportingValue } from '../TestSupportingTypes/Web';

export class TestAlsoUsesSupportingTypes {

    //begin eventHandler
    public testAlsoUsesSupportingTypes(): void {
        console.log(TestSupportingValue.describe());
    }
    //end eventHandler
}
