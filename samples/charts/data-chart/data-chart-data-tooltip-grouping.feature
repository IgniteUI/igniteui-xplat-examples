# DataToolTipLayer grouping: one grouped tooltip with a 'Medals by Country' group header over the three country series.
When we are talking about the series with name ColumnSeries1
Then this series shapes will match the America column of sample data named OlympicMedalsTopCountriesWithTotals within small tolerance
When we are talking about the series with name ColumnSeries2
Then this series shapes will match the China column of sample data named OlympicMedalsTopCountriesWithTotals within small tolerance
When we are talking about the series with name ColumnSeries3
Then this series shapes will match the Russia column of sample data named OlympicMedalsTopCountriesWithTotals within small tolerance
When we are talking about the axis with name xAxis
Then this axis will have labels visible with these values: 1996, 2000, 2004, 2008, 2012, 2016
When we are talking about the series with name ColumnSeries1
When the user hovers slightly below the category point with label 2008
# Values use the default formatting, and the group ends with a Total summary row.
Then the data tooltip named dataToolTipLayer will contain one grouped tooltip with the following values:
  | BadgeType | Text | ValueText | Units | RowType |
  |  | 2008 |  |  | Header |
  |  | Medals by Country |  |  | GroupHeader |
  | Square | America | 131 |  | Series |
  | Square | China | 129 |  | Series |
  | Square | Russia | 65 |  | Series |
  |  | Total | 325 |  | Summary |
