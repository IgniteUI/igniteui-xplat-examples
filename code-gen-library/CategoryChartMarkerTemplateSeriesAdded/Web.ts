//begin imports
import { IgcChartSeriesEventArgs, IgcMarkerSeriesComponent } from 'igniteui-webcomponents-charts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class CategoryChartMarkerTemplateSeriesAdded {

    //begin eventHandler
    public categoryChartMarkerTemplateSeriesAdded(sender: any, args: IgcChartSeriesEventArgs): void {
        // A category chart makes a series per column it is given, so there is no series in the
        // definition to hang a marker template on. The chart says when it has made one, and this is
        // where each gets the template.
        if (args.series != null) {
            // A marker template belongs to the series that draw markers, which is narrower than
            // what the event carries.
            (args.series as IgcMarkerSeriesComponent).markerTemplate =
                CodeGenHelper.findByName<any>("categoryChartValueMarkerTemplate");
        }
    }
    //end eventHandler
}
