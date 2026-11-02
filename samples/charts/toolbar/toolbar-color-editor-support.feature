# Toolbar with a custom ToolActionColorEditor ("Series Brush", command ToggleSeriesBrush) alongside the built-in
# DataChart tools; the chart plots the America column of CountryRenewableElectricity as one line series.
Then the toolbar will have the following action names:
  | Name            |
  | colorEditorTool |
  | ZoomMenu        |
  | AnalyzeMenu     |
  | CopyMenu        |
# The color editor tool renders its title as a label.
Then the toolbar action "colorEditorTool" will have title "Series Brush"
# America average 393/12 = 32.75.
When we simulate a click on toolbar action path "AnalyzeMenu"
When we simulate a click on toolbar action path "AnalyzeMenu, SeriesAvg"
Then this domain chart will have value overlays with the following properties:
  | Orientation | Value |
  | Horizontal  | 32.75 |
