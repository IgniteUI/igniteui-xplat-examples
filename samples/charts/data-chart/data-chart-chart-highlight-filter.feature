# Highlight filter from a member path: the Total medal column with the America column as its highlighted values.
# The chart starts with highlightedValuesDisplayMode Hidden; the editor switches it to Overlay.
When we are talking about the series with name ColumnSeries1
Then this series shapes will match the Total column of sample data named OlympicMedalsTopCountriesWithTotals within small tolerance
Then this series will not have any highlight layer shapes
When we are talking about the axis with name xAxis
Then this axis will have labels visible with these values: 1996, 2000, 2004, 2008, 2012, 2016
When we are talking about the axis with name yAxis
Then this axis range will have a minimum value of 0 and a maximum value of 400
When we are talking about the series with name ColumnSeries1
When this series displays highlighted values
Then this series highlight shapes will match category values within small tolerance:
  | Value |
  | 148 |
  | 142 |
  | 134 |
  | 131 |
  | 135 |
  | 146 |
