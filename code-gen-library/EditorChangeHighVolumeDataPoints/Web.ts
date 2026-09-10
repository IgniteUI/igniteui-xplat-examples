//begin imports
import { IgcPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-webcomponents-layouts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';
// Declared by the CategoryChartVolumeData supporting item, which this item requires: in a generated
// sample that type is written beside the component, so there is no import of it there.
import { CategoryChartVolumeData } from '../CategoryChartVolumeData/Web';

export class EditorChangeHighVolumeDataPoints {

    //begin eventHandler
    public editorChangeHighVolumeDataPoints(sender: any, args: IgcPropertyEditorPropertyDescriptionChangedEventArgs): void {
        CategoryChartVolumeData.count = Number(args.newValue);
    }
    //end eventHandler
}
