//begin imports
import { IgcUserAnnotationInformationEventArgs } from 'igniteui-webcomponents-charts';
//end imports

// Declared by the UserAnnotationFlowUtility supporting item, which this item requires.
import { UserAnnotationFlow } from '../UserAnnotationFlowUtility/Web';

export class DataChartUserAnnotationRequested {

    //begin eventHandler
    public dataChartUserAnnotationRequested(sender: any, args: IgcUserAnnotationInformationEventArgs): void {
        UserAnnotationFlow.begin(args.annotationInfo);
    }
    //end eventHandler
}
