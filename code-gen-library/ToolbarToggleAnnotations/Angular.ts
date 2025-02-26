//begin imports
import { IgxToolCommandEventArgs } from 'igniteui-angular-layouts';
import { IgxDataChartComponent, IgxSeriesComponent, IgxDataToolTipLayerComponent, IgxCrosshairLayerComponent, IgxFinalValueLayerComponent } from 'igniteui-angular-charts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class ToolbarToggleAnnotations {
    //begin eventHandler
    public ToolbarToggleAnnotations(sender: any, args: IgxToolCommandEventArgs): void {
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
			case "EnableCrosshairs":
				var enable = args.command.argumentsList[0].value as boolean;
				if (enable)
				{
					target.series.add(new IgxCrosshairLayerComponent());
				}
				else
				{
					var toRemove = null;
					for (var i = 0; i < target.actualSeries.length; i++) {
						let s = target.actualSeries[i] as IgxSeriesComponent;
						if (s instanceof IgxCrosshairLayerComponent)
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
					target.series.add(new IgxFinalValueLayerComponent());
				}
				else
				{
					var toRemove = null;
					for (var i = 0; i < target.actualSeries.length; i++) {
						let s = target.actualSeries[i] as IgxSeriesComponent;
						if (s instanceof IgxFinalValueLayerComponent)
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