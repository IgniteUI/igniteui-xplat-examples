//begin imports
import { IgcChartSeriesEventArgs } from 'igniteui-webcomponents-charts';

//end imports

export class TestsUpdateTitlesInSeriesAddedEvent {
    //begin eventHandler
    titleIndex:number = 0;
	public testsUpdateTitlesInSeriesAddedEvent(sender: any,args: IgcChartSeriesEventArgs): void {
        const o = CodeGenHelper.findByName<any>("SeriesAddedTitles");
        const obj = JSON.parse(o.toString());

        const updateAnnotations: boolean = obj.includeAnnotations;
        const names: string[] = obj.names;

        if (args.series.isAnnotationLayer && !updateAnnotations) {
            return;
        }

        if (this.titleIndex >= names.length) {
            this.titleIndex = 0;
        }

        if (names.includes(args.series.title)) {
            return; // already set
        }

        args.series.title = names[this.titleIndex++];

	}
	//end eventHandler
}