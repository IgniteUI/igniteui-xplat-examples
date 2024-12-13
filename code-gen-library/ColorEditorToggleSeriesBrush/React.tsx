//begin imports
import { IgrToolCommandEventArgs } from 'igniteui-react-layouts';
import { IgrDataChart, IgrSeries } from 'igniteui-react-charts';

//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class ColorEditorToggleSeriesBrush {
    //begin eventHandler
    public colorEditorToggleSeriesBrush(sender: any, args: IgrToolCommandEventArgs): void {
        var target = CodeGenHelper.getDescription<IgrDataChart>("content");
        
		switch (args.command.commandId)
		{
            case "ToggleSeriesBrush":
                var color = args.command.argumentsList[0].value
                let series = target.contentSeries[0] as IgrSeries;
                series.brush = color as any;
            break;
        }
    }
    //end eventHandler
}