//begin imports
import com.infragistics.mobile.controls.IgaToolCommandEventArgs
import com.infragistics.mobile.controls.IgaDataChart
import com.infragistics.mobile.controls.IgaSeries
import com.infragistics.mobile.controls.IgaDataToolTipLayer
//end imports

import com.infragistics.mobile.controls.CodeGenHelper

class ToolbarThemeChanged {

    //begin eventHandler
    fun toolbarThemeChanged(sender: Any?, e: IgaToolCommandEventArgs) {
        val target = CodeGenHelper.getDescription<IgaDataChart>("content")

        when (e.command.commandId) {
            "EnableTooltips" -> {
                var toRemove: IgaSeries? = null
                for (s in target.series) {
                    if (s is IgaDataToolTipLayer) {
                        toRemove = s
                    }
                }

                if (toRemove == null) {
                    target.series.add(IgaDataToolTipLayer())
                } else {
                    target.series.remove(toRemove)
                }
            }
        }
    }
    //end eventHandler

}