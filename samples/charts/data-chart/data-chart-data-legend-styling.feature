# DataLegend styling: the group header rows ('Total Medals' and the highlighted 'Country' group) are purple, Arial,
# 20px, italic and bold. The single Total column series overlays its America values as the highlight.
When we are talking about the series with name ColumnSeries1
Then this series shapes will match the Total column of sample data named OlympicMedalsTopCountriesWithTotals within small tolerance
Then this series highlight shapes will match category values within small tolerance:
  | Value |
  | 148 |
  | 142 |
  | 134 |
  | 131 |
  | 135 |
  | 146 |
When the user hovers slightly below the category point with label 2008
# CALIBRATE: series title '' with highlightedTitleSuffix 'America', default value formatting, and whether a
# single-series group shows a Total summary row
Then this data legend will have data rows with the following values:
  | BadgeType | Text | ValueText | Units | RowType |
  |  | 2008 |  |  | Header |
  |  | Total Medals |  |  | GroupHeader |
  | Square |  | 325 |  | Series |
  |  | Country |  |  | GroupHeader |
  | Square | America | 131 |  | Series |
Then this data legends rows 2,4 will have these columns with styling attributes:
  | C1-TextColor | C1-FontFamily | C1-FontSize | C1-FontStyle | C1-FontWeight | RowType |
  | purple | Arial | 20 | Italic | Bold | GroupHeader |
