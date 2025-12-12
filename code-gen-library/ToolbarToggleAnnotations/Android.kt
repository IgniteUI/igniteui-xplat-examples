//begin imports
import com.infragistics.mobile.controls.IgaToolCommandEventArgs
import com.infragistics.mobile.controls.IgaToolbar
import com.infragistics.mobile.controls.IgaDataChart
import com.infragistics.mobile.controls.IgaSeries
import com.infragistics.mobile.controls.IgaDataToolTipLayer
import com.infragistics.mobile.controls.IgaCrosshairLayer
import com.infragistics.mobile.controls.IgaFinalValueLayer
//end imports

import com.infragistics.mobile.controls.CodeGenHelper

class ToolbarToggleAnnotations {

    //begin eventHandler
    fun toolbarToggleAnnotations(sender: Any?, e: IgaToolCommandEventArgs) {
        val toolbar = sender as IgaToolbar
        val target = toolbar.target as IgaDataChart
        var enable = false

        when (e.command.commandId) {
            "EnableTooltips" -> {
                enable = e.command.argumentsList[0].value as Boolean
                if (enable) {
                    target.series.add(IgaDataToolTipLayer())
                } else {
                    var toRemove: IgaSeries? = null
                    for (s in target.series) {
                        if (s is IgaDataToolTipLayer) {
                            toRemove = s
                        }
                    }
                    if (toRemove != null) {
                        target.series.remove(toRemove)
                    }
                }
            }
            "EnableCrosshairs" -> {
                enable = e.command.argumentsList[0].value as Boolean
                if (enable) {
                    target.series.add(IgaCrosshairLayer())
                } else {
                    var toRemove: IgaSeries? = null
                    for (s in target.series) {
                        if (s is IgaCrosshairLayer) {
                            toRemove = s
                        }
                    }
                    if (toRemove != null) {
                        target.series.remove(toRemove)
                    }
                }
            }
            "EnableFinalValues" -> {
                enable = e.command.argumentsList[0].value as Boolean
                if (enable) {
                    target.series.add(IgaFinalValueLayer())
                } else {
                    var toRemove: IgaSeries? = null
                    for (s in target.series) {
                        if (s is IgaFinalValueLayer) {
                            toRemove = s
                        }
                    }
                    if (toRemove != null) {
                        target.series.remove(toRemove)
                    }
                }
            }
        }
    }
    //end eventHandler

}