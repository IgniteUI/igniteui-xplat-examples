//begin imports
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-webcomponents-layouts';
import { IgcDataChartComponent } from 'igniteui-webcomponents-charts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class EditorButtonChartZoomIn {
    //begin eventHandler
    public editorButtonChartZoomIn(sender: any, args: IgcPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        var chart = CodeGenHelper.getDescription<IgcDataChartComponent>("content");
        if (chart.actualWindowPositionHorizontal < 1.0) {
            chart.actualWindowPositionHorizontal += 0.025;
        }
        if (chart.actualWindowPositionVertical < 1.0) {
            chart.actualWindowPositionVertical += 0.025;
        }
        if (chart.actualWindowScaleHorizontal > 0.05) {
            chart.actualWindowScaleHorizontal -= 0.05;
        }
        if (chart.actualWindowScaleVertical > 0.05) {
            chart.actualWindowScaleVertical -= 0.05;
        }
    }
    //end eventHandler
}
