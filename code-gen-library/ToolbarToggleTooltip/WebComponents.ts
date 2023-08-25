//begin imports
import { IgcToolCommandEventArgs } from 'igniteui-webcomponents-layouts';
import { IgcDataChartComponent, IgcSeriesComponent, IgcDataToolTipLayerComponent } from 'igniteui-webcomponents-charts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class ToolbarToggleTooltip {
    //begin eventHandler
    public toolbarToggleTooltip(sender: any, args: IgcToolCommandEventArgs): void {
        var target = CodeGenHelper.getDescription<IgcDataChartComponent>("content");
        switch (args.command.commandId)
		{
			case "EnableTooltips":
				var enable = args.command.argumentsList[0].value as boolean;
				if (enable)
				{
					target.series.add(new IgcDataToolTipLayerComponent());
				}
				else
				{
					var toRemove = null;
					for (var i = 0; i < target.actualSeries.length; i++) {
                        let s = target.actualSeries[i] as IgcSeriesComponent;
						if (s instanceof IgcDataToolTipLayerComponent)
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