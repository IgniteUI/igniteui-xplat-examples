//begin imports
//end imports

public class EditorChangeReplayTransitionIn {
    //begin eventHandler
    public func editorChangeReplayTransitionIn(sender: Any?, args: IgsPropertyEditorPropertyDescriptionChangedEventArgs?) {
        guard let series = CodeGenHelper.getDescription(IgsDataChart.self, "content")?.series else { return }
        for i in 0..<series.count {
            series[i]?.replayTransitionIn()
        }
    }
    //end eventHandler
}
