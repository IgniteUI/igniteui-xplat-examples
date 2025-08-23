//begin imports
//end imports

public class EditorButtonReplayTransitionInDomain {
    //begin eventHandler
    public func editorButtonReplayTransitionInDomain(sender: Any?, args: IgsPropertyEditorPropertyDescriptionButtonClickEventArgs) {
        let chart = CodeGenHelper.getDescription(Any.self, "content")

        if let dataChart = chart as? IgsDataChart {
            dataChart.replayTransitionIn()
        }
        if let categoryChart = chart as? IgsCategoryChart {
            categoryChart.replayTransitionIn()
        }
    }
    //end eventHandler
}
