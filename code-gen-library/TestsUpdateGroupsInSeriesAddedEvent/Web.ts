//begin imports
import { IgcChartSeriesEventArgs } from 'igniteui-webcomponents-charts';

//end imports

export class TestsUpdateGrpupsInSeriesAddedEvent
{
    //begin eventHandler
    groupIndex: number = 0;
    public testsUpdateGroupsInSeriesAddedEvent(sender: any,args: IgcChartSeriesEventArgs): void
    {         
         const o = CodeGenHelper.findByName<any>("SeriesAddedGroups");
         const obj = JSON.parse(o.value.toString());
         const updateAnnotations: boolean = obj.includeAnnotations;
		 const groups: string[] = obj.names;
		
     if (args.series.isAnnotationLayer) {
      return;
     }

		if (this.groupIndex >= groups.length)
				this.groupIndex = 0;
		if (groups.includes(args.series.dataLegendGroup))
			return; // already set
		args.series.dataLegendGroup = groups[this.groupIndex++];
    }
    //end eventHandler
}