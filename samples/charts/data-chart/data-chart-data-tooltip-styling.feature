# DataToolTipLayer styling: grouped tooltip whose group headers are purple, Arial 14px, italic, bold (styling not
# assertable with current steps, see report); content is the Total column with the America highlight.
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
# The Total Medals series has an empty title and the highlighted series is titled by its highlightedTitleSuffix,
# America; values use the default formatting, and a group with a single series has no Total summary row.
Then the data tooltip named dataToolTipLayer will contain one grouped tooltip with the following values:
  | BadgeType | Text | ValueText | Units | RowType |
  |  | 2008 |  |  | Header |
  |  | Total Medals |  |  | GroupHeader |
  | Square |  | 325 |  | Series |
  |  | Country |  |  | GroupHeader |
  | Square | America | 131 |  | Series |
