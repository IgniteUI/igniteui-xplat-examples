//begin imports
import { IgxToolCommandEventArgs } from 'igniteui-angular-layouts';
import { IgxDataChartComponent, IgxSeriesComponent, IgxDataToolTipLayerComponent } from 'igniteui-angular-charts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class ToolbarToggleTooltip {
    //begin eventHandler
    public toolbarToggleTooltip(sender: any, args: IgxToolCommandEventArgs): void {
        var target = CodeGenHelper.getDescription<IgxDataChartComponent>("content");
        switch (args.command.commandId)
		{
			case "EnableTooltips":
				var enable = args.command.argumentsList[0].value as boolean;
				if (enable)
				{
					target.series.add(new IgxDataToolTipLayerComponent());
				}
				else
				{
					var toRemove = null;
					for (var i = 0; i < target.actualSeries.length; i++) {
                        let s = target.actualSeries[i] as IgxSeriesComponent;
						if (s instanceof IgxDataToolTipLayerComponent)
						{
							toRemove = s;
						}
					}
					if (toRemove != null)
					{
						target.series.remove(toRemove);
					}
				}
				break;
		}
    }
    //end eventHandler
}