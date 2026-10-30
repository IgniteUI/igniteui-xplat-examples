# Toolbar layout customization on a DataChart: a custom icon menu ("MenuForSubPanelTool") holding a "Visualizations"
# group header and a sub panel of checkboxes (Enable Tooltips/Crosshairs/Final Values), a "Reset" label placed after
# ZoomOut, and the built-in ZoomReset, AnalyzeMenu and CopyMenu tools collapsed.
Then the toolbar will have the following action names:
  | Name                |
  | MenuForSubPanelTool |
  | ZoomMenu            |
Then the toolbar action "AnalyzeMenu" will not be visible
Then the toolbar action "CopyMenu" will not be visible
When we simulate a click on toolbar action path "MenuForSubPanelTool"
Then the toolbar dropdown menu will have the following action names:
  | Name                |
  | SubPanelGroup       |
  | CustomSubPanelTools |
Then the toolbar action "SubPanelGroup" will have title "Visualizations"
Then the toolbar action "EnableTooltipsLabel" will have title "Enable Tooltips"
Then the toolbar action "EnableCrosshairsLabel" will have title "Enable Crosshairs"
Then the toolbar action "EnableFinalValuesLabel" will have title "Enable Final Values"
Then the toolbar action "EnableCrosshairsLabel" will not be checked
And this domain chart will not have a crosshair layer
# CALIBRATE: the click path into the sub panel (whether CustomSubPanelTools is a path level), and that the host wires
# the sample's onCommandRef handler (ToolbarToggleAnnotations), which adds a CrosshairLayer / FinalValueLayer.
When we simulate a click on toolbar action path "MenuForSubPanelTool, CustomSubPanelTools, EnableCrosshairsLabel"
Then the toolbar action "EnableCrosshairsLabel" will be checked
And this domain chart will have a crosshair layer
When we simulate a click on toolbar action path "MenuForSubPanelTool, CustomSubPanelTools, EnableFinalValuesLabel"
Then the toolbar action "EnableFinalValuesLabel" will be checked
And this domain chart will have a FinalValueLayer annotation layer
When we simulate a click on toolbar action path "ZoomMenu"
Then the dropdown action "zoomResetLabel" will appear in the open menu
Then the toolbar action "zoomResetLabel" will have title "Reset"
Then the toolbar action "ZoomOut" will appear before "zoomResetLabel"
