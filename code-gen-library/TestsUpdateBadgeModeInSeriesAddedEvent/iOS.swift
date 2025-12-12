//begin imports
//end imports

class TestsUpdateBadgeModeInSeriesAddedEvent {

    //begin eventHandler
    func testsUpdateBadgeModeInSeriesAddedEvent(sender: Any?, args: IgsChartSeriesEventArgs?) {
        args!.series!.legendItemBadgeMode = IgsLegendItemBadgeMode.matchSeries
    }
    //end eventHandler

}
