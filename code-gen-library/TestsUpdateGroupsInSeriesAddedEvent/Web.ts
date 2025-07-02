//begin imports
import { IgcChartSeriesEventArgs } from 'igniteui-webcomponents-charts';

//end imports

export class TestsUpdateGrpupsInSeriesAddedEvent
{
    //begin eventHandler
    groupIndex: number = 0;
    updateAnnotations: boolean = false;
    groups: string[] = null;
    public testsUpdateGroupsInSeriesAddedEvent(sender: any,args: IgrChartSeriesEventArgs): void
    {  
        if (this.groups == null){       
         const o = CodeGenHelper.findByName<object>("SeriesAddedGroups");
         const obj = JSON.parse(o["value"]);
         this.updateAnnotations = obj.includeAnnotations;
    	 this.groups = obj.names;
        }

        if (args.series.isAnnotationLayer && !this.updateAnnotations) {
            return;
        }
    						
    	if (this.groupIndex >= this.groups.length)
    			this.groupIndex = 0;
    	if (this.groups.includes(args.series.dataLegendGroup))
    		return; // already set
    	args.series.dataLegendGroup = this.groups[this.groupIndex++];
    }
    //end eventHandler
}