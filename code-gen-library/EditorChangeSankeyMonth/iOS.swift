//begin imports
//end imports

public class EditorChangeSankeyMonth {
    //begin eventHandler
    public func editorChangeSankeyMonth(sender: Any?, args: IgsPropertyEditorPropertyDescriptionChangedEventArgs?) {
        guard let chart = CodeGenHelper.getDescription(IgsDataChart.self, "content") else { return }
        guard let month = args?.newValue as? String else { return }

        // The links carry one value column per month; reading another column animates the
        // flows to that month's values (shouldAnimateOnDataSourceSwap + transitionDuration).
        let series = chart.actualSeries
        for i in 0..<series.count {
            if let sankey = series[i] as? IgsSankeySeries {
                sankey.linkValueMemberPath = month
            }
        }
    }
    //end eventHandler
}
