# Column chart of HighestGrossingMovies with a DataLegend (unitsText B). Hovering Star Wars shows its two values
# from the data (TotalRevenue 10.32, HighestGrossing 2.07) and their total 12.39, each with the B units.
Then this category chart will have 2 visible series of Column type
When the user hovers slightly below the category point with label Star Wars
Then this data legend will have data rows with the following values:
  | BadgeType | Text             | ValueText | Units | RowType |
  |           | Star Wars        |           |       | Header  |
  | Square    | Total Revenue    | 10.32     | B     | Series  |
  | Square    | Highest Grossing | 2.07      | B     | Series  |
  |           | Total            | 12.39     | B     | Summary |
