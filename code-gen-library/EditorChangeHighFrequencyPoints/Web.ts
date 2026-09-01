//begin imports
import { IgcPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-webcomponents-layouts';
//end imports

// Declared by the CategoryChartFrequencyData supporting item, which this item requires: in a
// generated sample that type is written beside the component, so there is no import of it there.
import { CategoryChartFrequency } from '../CategoryChartFrequencyData/Web';

export class EditorChangeHighFrequencyPoints {

    //begin eventHandler
    public editorChangeHighFrequencyPoints(sender: any, args: IgcPropertyEditorPropertyDescriptionChangedEventArgs): void {
        CategoryChartFrequency.points = Number(args.newValue);
    }
    //end eventHandler
}
