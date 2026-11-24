//begin imports
import com.infragistics.mobile.controls.IgaCategoryChart;
//end imports

public class CategoryChartHighVolumeOnViewInit {
    //begin eventHandler
    //Kotlin: Action
    public fun categoryChartHighVolumeOnViewInit() {
        CodeGenHelper.getDescription<IgaCategoryChart>("content")!!.dataSource = CategoryChartVolumeData.generate(CategoryChartVolumeData.count);
    }
    //end eventHandler
}
