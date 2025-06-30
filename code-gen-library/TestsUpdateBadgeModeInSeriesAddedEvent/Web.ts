//begin imports
import { IgcChartSeriesEventArgs } from 'igniteui-webcomponents-charts';
import {  LegendItemBadgeMode } from 'igniteui-webcomponents-core';

//end imports

export class TestsUpdateBadgeModeInSeriesAddedEvent
{
    //begin eventHandler
    public testsUpdateBadgeModeInSeriesAddedEvent(sender: any,args: IgcChartSeriesEventArgs): void
    {
          args.series.legendItemBadgeMode = LegendItemBadgeMode.MatchSeries;
       
    }
    //end eventHandler
}