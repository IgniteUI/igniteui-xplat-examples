//begin imports
import { IgcPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-webcomponents-layouts';
import { IgcDataChartComponent } from 'igniteui-webcomponents-charts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class EditorChangeUpdateDataChartMarkerType {
    //begin eventHandler
    public editorChangeUpdateDataChartMarkerType(sender: any, args: IgcPropertyEditorPropertyDescriptionChangedEventArgs): void {
        var chart = CodeGenHelper.getDescription<IgcDataChartComponent>("content");
        var markerTypeVal = args.newValue;
        var series = chart.actualSeries;
        for (var i = 0; i < series.length; i++) {
            (series[i] as any).markerType = markerTypeVal;
        }
    }
    //end eventHandler
}
