//begin imports
import { IgcChartSeriesEventArgs } from 'igniteui-webcomponents-charts';

//end imports

export class TestsUpdateTitlesInSeriesAddedEvent {
    //begin eventHandler
    titleIndex:number = 0;
    updateAnnotations: boolean = false;
    names: string[] = null;
    public testsUpdateTitlesInSeriesAddedEvent(sender: any,args: IgrChartSeriesEventArgs): void {
        if (this.names == null){
            const o = CodeGenHelper.findByName<any>("SeriesAddedTitles");
            const obj = JSON.parse(o["value"]);
    
            this.updateAnnotations = obj.includeAnnotations;
            this.names = obj.names;
        }
    
        if (args.series.isAnnotationLayer && !this.updateAnnotations) {
            return;
        }
    
        if (this.titleIndex >= this.names.length) {
            this.titleIndex = 0;
        }
    
        if (this.names.includes(args.series.title)) {
            return; // already set
        }
    
        args.series.title = this.names[this.titleIndex++];
    
    }
	//end eventHandler
}