# DataLegend grouping: the three country column series share the data legend group 'Medals by Country', shown as a
# group header row.
When we are talking about the series with name ColumnSeries1
Then this series shapes will match the America column of sample data named OlympicMedalsTopCountriesWithTotals within small tolerance
When we are talking about the series with name ColumnSeries2
Then this series shapes will match the China column of sample data named OlympicMedalsTopCountriesWithTotals within small tolerance
When we are talking about the series with name ColumnSeries3
Then this series shapes will match the Russia column of sample data named OlympicMedalsTopCountriesWithTotals within small tolerance
When we are talking about the axis with name xAxis
Then this axis will have labels visible with these values: 1996, 2000, 2004, 2008, 2012, 2016
# The data legend shows the last category until the pointer moves over the chart.
# CALIBRATE: default value formatting and the group Total summary row
Then this data legend will have data rows with the following values:
  | BadgeType | Text | ValueText | Units | RowType |
  |  | 2016 |  |  | Header |
  |  | Medals by Country |  |  | GroupHeader |
  | Square | America | 146 |  | Series |
  | Square | China | 112 |  | Series |
  | Square | Russia | 88 |  | Series |
  |  | Total | 346 |  | Summary |
When we are talking about the series with name ColumnSeries1
When the user hovers slightly below the category point with label 2008
# CALIBRATE: default value formatting and the group Total summary row
Then this data legend will have data rows with the following values:
  | BadgeType | Text | ValueText | Units | RowType |
  |  | 2008 |  |  | Header |
  |  | Medals by Country |  |  | GroupHeader |
  | Square | America | 131 |  | Series |
  | Square | China | 129 |  | Series |
  | Square | Russia | 65 |  | Series |
  |  | Total | 325 |  | Summary |
