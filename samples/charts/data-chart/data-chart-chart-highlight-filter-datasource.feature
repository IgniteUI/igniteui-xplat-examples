# Highlight filter from a second data source: the Value columns are total traffic and the highlight data source holds
# the desktop-only share. The sample starts with highlightedValuesDisplayMode Hidden and the editor switches it to Overlay.
When we are talking about the series with name ColumnSeries1
Then this series shapes will match the Value column of sample data named OnlineTrafficHighlightTotals within small tolerance
Then this series will not have any highlight layer shapes
When we are talking about the axis with name xAxis
Then this axis will have labels visible with these values: Apparel, Beauty, Travel, Grocery, Energy, Home Supply, Financial
When we are talking about the axis with name yAxis
Then this axis range will have a minimum value of 0 and a maximum value of 100
When we are talking about the series with name ColumnSeries1
When this series displays highlighted values
Then this series highlight shapes will match category values within small tolerance:
  | Value |
  | 27 |
  | 29 |
  | 41 |
  | 37 |
  | 58 |
  | 35 |
  | 58 |
