//begin imports
import { IgrToolCommandEventArgs } from 'igniteui-react-layouts';
import { IgrDataChart, IgrSeries, IgrDataToolTipLayer } from 'igniteui-react-charts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class ToolbarToggleTooltip {
    //begin eventHandler
    public toolbarToggleTooltip(sender: any, args: IgrToolCommandEventArgs): void {
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
		}
    }
    //end eventHandler
}