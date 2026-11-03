//begin imports
//end imports

// Declared by the TestSupportingTypes supporting item, which this item requires.
import { TestSupportingValue } from '../TestSupportingTypes/Web';

export class TestUsesSupportingTypes {

    //begin eventHandler
    public testUsesSupportingTypes(): void {
        console.log(TestSupportingValue.describe());
    }
    //end eventHandler
}
