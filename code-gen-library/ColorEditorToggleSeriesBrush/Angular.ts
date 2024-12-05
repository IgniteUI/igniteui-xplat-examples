//begin imports
import { IgxToolCommandEventArgs } from 'igniteui-angular-layouts';
import { IgxDataChartComponent, IgxSeriesComponent } from 'igniteui-angular-charts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class ColorEditorToggleSeriesBrush {
    //begin eventHandler
    public colorEditorToggleSeriesBrush(sender: any, args: IgxToolCommandEventArgs): void {
        var target = CodeGenHelper.getDescription<IgxDataChartComponent>("content");
        
		switch (args.command.commandId)
		{
			case "ToggleSeriesBrush":
				var color = args.command.argumentsList[0].value
				let series = target.series.item(0) as IgxSeriesComponent;
				series.brush = color;
			break;
		}
    }
    //end eventHandler
}