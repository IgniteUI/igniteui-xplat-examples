//begin imports
import { IgcPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-webcomponents-layouts';
import { IgcDataChartComponent, IgcSankeySeriesComponent } from 'igniteui-webcomponents-charts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class EditorChangeSankeyMonth {
    //begin eventHandler
    public editorChangeSankeyMonth(sender: any, args: IgcPropertyEditorPropertyDescriptionChangedEventArgs): void {
        var chart = CodeGenHelper.getDescription<IgcDataChartComponent>("content");
        var month = args.newValue as string;
        var series = chart.actualSeries;
        for (var i = 0; i < series.length; i++) {
            if (series[i] instanceof IgcSankeySeriesComponent) {
                // The links carry one value column per month; reading another column animates the
                // flows to that month's values (shouldAnimateOnDataSourceSwap + transitionDuration).
                (series[i] as IgcSankeySeriesComponent).linkValueMemberPath = month;
            }
        }
    }
    //end eventHandler
}
