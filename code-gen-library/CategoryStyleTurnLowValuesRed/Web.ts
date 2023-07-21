//begin imports
import { IgcDataChartComponent } from 'igniteui-webcomponents-charts';
import { IgcCategoryStyle } from 'igniteui-webcomponents-charts';
import { IgcSeriesComponent } from 'igniteui-webcomponents-charts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class CategoryStyleTurnLowValuesRed {
    //begin eventHandler
    public categoryStyleTurnLowValuesRed(sender: any, args: IgcAssigningCategoryStyleEventArgs): void {
        var series = sender as IgcSeriesComponent;
        var items = args.getItems(args.startIndex, args.endIndex);
        for (var i = 0; i < items.length; i++) 
        {
            var item = items[i];
            var value = series.getItemValue(item, "valueMemberPath") as number;
            if (value < 60) {
                args.fill = "red";
            }
        }
    }
    //end eventHandler
}