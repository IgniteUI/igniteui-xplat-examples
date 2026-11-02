# Column chart of HighestGrossingMovies with a DataLegend in Decimal format mode with at least 1 fraction digit and B
# units. Hovering Marvel Universe (TotalRevenue 22.55, HighestGrossing 2.8) shows them to one decimal place, 22.6 and
# 2.8, and their total 25.35 as 25.4.
When the user hovers slightly below the category point with label Marvel Universe
Then this data legend will have data rows with the following values:
  | BadgeType | Text             | ValueText | Units | RowType |
  |           | Marvel Universe  |           |       | Header  |
  | Square    | Total Revenue    | 22.6      | B     | Series  |
  | Square    | Highest Grossing | 2.8       | B     | Series  |
  |           | Total            | 25.4      | B     | Summary |
