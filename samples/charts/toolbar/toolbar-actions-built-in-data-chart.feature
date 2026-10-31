# Toolbar targeting a DataChart with three line series (America, Europe, China of CountryRenewableElectricity) exposes
# the built-in Zoom/Analyze/Copy menus, and its Analyze tools add layers to the chart.
Then the toolbar will have the following action names:
  | Name        |
  | ZoomMenu    |
  | AnalyzeMenu |
  | CopyMenu    |
When we simulate a click on toolbar action path "AnalyzeMenu"
Then the toolbar action "ShowCrosshairs" will not be checked
And this domain chart will not have a crosshair layer
When we simulate a click on toolbar action path "AnalyzeMenu, ShowCrosshairs"
Then the toolbar action "ShowCrosshairs" will be checked
And this domain chart will have a crosshair layer
# Series averages of CountryRenewableElectricity: America 393/12 = 32.75, Europe 639/12 = 53.25, China 837/12 = 69.75.
When we simulate a click on toolbar action path "AnalyzeMenu, SeriesAvg"
Then this domain chart will have value overlays with the following properties:
  | Orientation | Value |
  | Horizontal  | 32.75 |
  | Horizontal  | 53.25 |
  | Horizontal  | 69.75 |
