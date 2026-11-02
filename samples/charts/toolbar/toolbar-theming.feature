# Toolbar theming: a PropertyEditorPanel edits the toolbar's BaseTheme (initially Default) over a DataChart with one
# line series (America of CountryRenewableElectricity). The theme has no assertion step (see report); the built-in
# tools and their effect are asserted.
Then the toolbar will have the following action names:
  | Name        |
  | ZoomMenu    |
  | AnalyzeMenu |
  | CopyMenu    |
# America average 393/12 = 32.75.
When we simulate a click on toolbar action path "AnalyzeMenu"
When we simulate a click on toolbar action path "AnalyzeMenu, SeriesAvg"
Then this domain chart will have value overlays with the following properties:
  | Orientation | Value |
  | Horizontal  | 32.75 |
