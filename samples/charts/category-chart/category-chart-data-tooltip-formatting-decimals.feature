# Column chart of HighestGrossingMovies with a data tooltip in Decimal format mode with at least 2 fraction digits and
# B units. Hovering Marvel Universe (TotalRevenue 22.55, HighestGrossing 2.8) shows 22.55, 2.80 and their total 25.35.
When the user hovers slightly below the category point with label Marvel Universe
Then the data tooltip named dataToolTip will contain one grouped tooltip with the following values:
  | BadgeType | Text             | ValueText | Units | RowType |
  |           | Marvel Universe  |           |       | Header  |
  | Square    | Total Revenue    | 22.55     | B     | Series  |
  | Square    | Highest Grossing | 2.80      | B     | Series  |
  |           | Total            | 25.35     | B     | Summary |
