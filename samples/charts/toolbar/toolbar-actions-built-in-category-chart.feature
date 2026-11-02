# Toolbar targeting a line CategoryChart (CountryRenewableElectricity: Europe, China, America by Year) exposes the
# built-in Zoom/Analyze/Copy menus, and its Analyze tools act on the chart.
Then the toolbar will have the following action names:
  | Name        |
  | ZoomMenu    |
  | AnalyzeMenu |
  | CopyMenu    |
Then this category chart will have xAxis labels matching the Year column of sample data named CountryRenewableElectricity
When we are talking about the series at index 0
Then this series shapes will match the Europe column of sample data named CountryRenewableElectricity within small tolerance
When we are talking about the series at index 1
Then this series shapes will match the China column of sample data named CountryRenewableElectricity within small tolerance
When we are talking about the series at index 2
Then this series shapes will match the America column of sample data named CountryRenewableElectricity within small tolerance
When we simulate a click on toolbar action path "AnalyzeMenu"
Then the toolbar dropdown menu will have the following action names:
  | Name            |
  | LinesMenu       |
  | TrendsMenu      |
  | SeriesAvg       |
  | ValueLabelsMenu |
  | ShowGridlines   |
  | ShowCrosshairs  |
Then the toolbar action "ShowGridlines" will not be checked
And this category chart will have xAxis major gridlines hidden
When we simulate a click on toolbar action path "AnalyzeMenu, ShowGridlines"
Then the toolbar action "ShowGridlines" will be checked
And this category chart will have xAxis major gridlines visible
# Series averages of CountryRenewableElectricity: Europe 639/12 = 53.25, China 837/12 = 69.75, America 393/12 = 32.75.
When we simulate a click on toolbar action path "AnalyzeMenu, SeriesAvg"
Then this domain chart will have value overlays with the following properties:
  | Orientation | Value |
  | Horizontal  | 53.25 |
  | Horizontal  | 69.75 |
  | Horizontal  | 32.75 |
