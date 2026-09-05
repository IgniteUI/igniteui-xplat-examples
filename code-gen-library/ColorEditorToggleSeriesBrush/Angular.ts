//begin imports
import { IgxToolCommandEventArgs } from 'igniteui-angular-layouts';
import { IgxDataChartComponent, IgxSeriesComponent } from 'igniteui-angular-charts';
//end imports

import { CodeGenHelper } from 'igniteui-angular-core';

export class ColorEditorToggleSeriesBrush {
    //begin eventHandler
    public colorEditorToggleSeriesBrush(sender: any, args: IgxToolCommandEventArgs): void {
        var target = CodeGenHelper.getDescription<IgxDataChartComponent>("content");
		var color = args.command.argumentsList[0].value;

		switch (args.command.commandId)
		{
			case "ToggleSeriesBrush":
				let series = target.contentSeries.first as IgxSeriesComponent;
				series.brush = color;
			break;
		}
    }
    //end eventHandler
}