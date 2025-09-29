//begin imports
//end imports

public class EditorButtonReplayTransitionIn {
    //begin eventHandler
    public func editorButtonReplayTransitionIn(sender: Any?, args: IgsPropertyEditorPropertyDescriptionButtonClickEventArgs?) {
        guard let series = CodeGenHelper.getDescription(IgsDataChart.self, "content")?.series else { return }
        for i in 0..<series.count {
            series[i]?.replayTransitionIn()
        }
    }
    //end eventHandler
}
