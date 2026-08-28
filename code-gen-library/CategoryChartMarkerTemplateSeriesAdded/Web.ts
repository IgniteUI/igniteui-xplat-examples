//begin imports
import { IgcChartSeriesEventArgs } from 'igniteui-webcomponents-charts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class CategoryChartMarkerTemplateSeriesAdded {

    //begin eventHandler
    public categoryChartMarkerTemplateSeriesAdded(sender: any, args: IgcChartSeriesEventArgs): void {
        // A category chart makes a series per column it is given, so there is no series in the
        // definition to hang a marker template on. The chart says when it has made one, and this is
        // where each gets the template.
        if (args.series != null) {
            args.series.markerTemplate = CodeGenHelper.findByName<any>("categoryChartValueMarkerTemplate");
        }
    }
    //end eventHandler
}
