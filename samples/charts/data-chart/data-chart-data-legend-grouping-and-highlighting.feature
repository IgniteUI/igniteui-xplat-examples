# DataLegend grouping with highlighting: medal counts per country grouped under 'Olympic Medals' and their gold
# medal highlight values (overlay) grouped under 'Gold Medals', with group header rows visible.
When we are talking about the series with name ColumnSeries1
Then this series shapes will match the America column of sample data named OlympicMedalsTopCountriesWithTotals within small tolerance
Then this series highlight shapes will match category values within small tolerance:
  | Value |
  | 50 |
  | 40 |
  | 35 |
  | 20 |
  | 25 |
  | 45 |
When we are talking about the series with name ColumnSeries2
Then this series shapes will match the China column of sample data named OlympicMedalsTopCountriesWithTotals within small tolerance
Then this series highlight shapes will match category values within small tolerance:
  | Value |
  | 40 |
  | 45 |
  | 55 |
  | 35 |
  | 50 |
  | 45 |
When we are talking about the series with name ColumnSeries3
Then this series shapes will match the Russia column of sample data named OlympicMedalsTopCountriesWithTotals within small tolerance
Then this series highlight shapes will match category values within small tolerance:
  | Value |
  | 20 |
  | 40 |
  | 25 |
  | 35 |
  | 15 |
  | 30 |
When we are talking about the axis with name xAxis
Then this axis will have labels visible with these values: 1996, 2000, 2004, 2008, 2012, 2016
# The data legend shows the last category until the pointer moves over the chart.
# Values use the default formatting, and each group ends with a Total summary row.
Then this data legend will have data rows with the following values:
  | BadgeType | Text | ValueText | Units | RowType |
  |  | 2016 |  |  | Header |
  |  | Olympic Medals |  |  | GroupHeader |
  | Square | America | 146 |  | Series |
  | Square | China | 112 |  | Series |
  | Square | Russia | 88 |  | Series |
  |  | Total | 346 |  | Summary |
  |  | Gold Medals |  |  | GroupHeader |
  | Square | America | 45 |  | Series |
  | Square | China | 45 |  | Series |
  | Square | Russia | 30 |  | Series |
  |  | Total | 120 |  | Summary |
When we are talking about the series with name ColumnSeries1
When the user hovers slightly below the category point with label 2008
# Values use the default formatting, and each group ends with a Total summary row.
Then this data legend will have data rows with the following values:
  | BadgeType | Text | ValueText | Units | RowType |
  |  | 2008 |  |  | Header |
  |  | Olympic Medals |  |  | GroupHeader |
  | Square | America | 131 |  | Series |
  | Square | China | 129 |  | Series |
  | Square | Russia | 65 |  | Series |
  |  | Total | 325 |  | Summary |
  |  | Gold Medals |  |  | GroupHeader |
  | Square | America | 20 |  | Series |
  | Square | China | 35 |  | Series |
  | Square | Russia | 35 |  | Series |
  |  | Total | 90 |  | Summary |
