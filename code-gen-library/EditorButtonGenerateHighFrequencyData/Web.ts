//begin imports
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-webcomponents-layouts';
//end imports

// Declared by the CategoryChartFrequencyData supporting item, which this item requires: in a
// generated sample that type is written beside the component, so there is no import of it there.
import { CategoryChartFrequency } from '../CategoryChartFrequencyData/Web';

export class EditorButtonGenerateHighFrequencyData {

    //begin eventHandler
    public editorButtonGenerateHighFrequencyData(sender: any, args: IgcPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        CategoryChartFrequency.generate();
    }
    //end eventHandler
}
