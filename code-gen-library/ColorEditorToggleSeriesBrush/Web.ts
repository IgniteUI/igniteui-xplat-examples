//begin imports
import { IgcToolCommandEventArgs } from 'igniteui-webcomponents-layouts';
import { IgcDataChartComponent, IgcSeriesComponent } from 'igniteui-webcomponents-charts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class ColorEditorToggleSeriesBrush {
    //begin eventHandler
    public colorEditorToggleSeriesBrush(sender: any, args: IgcToolCommandEventArgs): void {
        var target = CodeGenHelper.getDescription<IgcDataChartComponent>("content");
        
		switch (args.command.commandId)
		{
            case "ToggleSeriesBrush":
                var color = args.command.argumentsList[0].value
                let series = target.series.item(0) as IgcSeriesComponent;
                series.brush = color;
            break;
        }
        
    }
    //end eventHandler
}