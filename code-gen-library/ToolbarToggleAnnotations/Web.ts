//begin imports
import { IgcToolCommandEventArgs } from 'igniteui-webcomponents-layouts';
import { IgcDataChartComponent, IgcSeriesComponent, IgcDataToolTipLayerComponent, IgcCrosshairLayerComponent, IgcFinalValueLayerComponent } from 'igniteui-webcomponents-charts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class ToolbarToggleAnnotations {
    //begin eventHandler
    public toolbarToggleAnnotations(sender: any, args: IgcToolCommandEventArgs): void {
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
			case "EnableCrosshairs":
				var enable = args.command.argumentsList[0].value as boolean;
				if (enable)
				{
					target.series.add(new IgcCrosshairLayerComponent());
				}
				else
				{
					var toRemove = null;
					for (var i = 0; i < target.actualSeries.length; i++) {
						let s = target.actualSeries[i] as IgcSeriesComponent;
						if (s instanceof IgcCrosshairLayerComponent)
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
			case "EnableFinalValues":
				var enable = args.command.argumentsList[0].value as boolean;
				if (enable)
				{
					target.series.add(new IgcFinalValueLayerComponent());
				}
				else
				{
					var toRemove = null;
					for (var i = 0; i < target.actualSeries.length; i++) {
						let s = target.actualSeries[i] as IgcSeriesComponent;
						if (s instanceof IgcFinalValueLayerComponent)
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