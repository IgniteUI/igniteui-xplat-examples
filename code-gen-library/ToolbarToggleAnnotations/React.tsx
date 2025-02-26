//begin imports
import { IgrToolCommandEventArgs } from 'igniteui-react-layouts';
import { IgrDataChart, IgrSeries, IgrDataToolTipLayer, IgrCrosshairLayer, IgrFinalValueLayer } from 'igniteui-react-charts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class ToolbarToggleAnnotations {
    //begin eventHandler
    public toolbarToggleAnnotations(sender: any, args: IgrToolCommandEventArgs): void {
        var target = CodeGenHelper.getDescription<IgrDataChart>("content");
        switch (args.command.commandId)
		{
			case "EnableTooltips":
				var enable = args.command.argumentsList[0].value as boolean;
				if (enable)
				{
					target.series.add(new IgrDataToolTipLayer({ name: "tooltipLayer" }));
				}
				else
				{
					var toRemove = null;
					for (var i = 0; i < target.actualSeries.length; i++) {
                        let s = target.actualSeries[i] as IgrSeries;
						if (s instanceof IgrDataToolTipLayer)
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
					target.series.add(new IgrCrosshairLayer({ name: "crosshairLayer" }));
				}
				else
				{
					var toRemove = null;
					for (var i = 0; i < target.actualSeries.length; i++) {
						let s = target.actualSeries[i] as IgrSeries;
						if (s instanceof IgrCrosshairLayer)
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
					target.series.add(new IgrFinalValueLayer({ name: "finalValueLayer" }));
				}
				else
				{
					var toRemove = null;
					for (var i = 0; i < target.actualSeries.length; i++) {
						let s = target.actualSeries[i] as IgrSeries;
						if (s instanceof IgrFinalValueLayer)
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