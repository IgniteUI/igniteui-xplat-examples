//begin imports
import com.infragistics.mobile.controls.IgaCategoryChart;
import com.infragistics.mobile.controls.IgaPropertyEditorPropertyDescriptionButtonClickEventArgs;
//end imports

public class EditorButtonGenerateHighVolumeData {
    //begin eventHandler
    public fun editorButtonGenerateHighVolumeData(sender: Any?, args: IgaPropertyEditorPropertyDescriptionButtonClickEventArgs?) {
        CodeGenHelper.getDescription<IgaCategoryChart>("content")!!.dataSource = CategoryChartVolumeData.generate(CategoryChartVolumeData.count);
    }
    //end eventHandler
}
