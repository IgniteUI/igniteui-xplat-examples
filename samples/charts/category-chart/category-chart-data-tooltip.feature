# Column chart of HighestGrossingMovies with toolTipType Data: hovering Star Wars shows one grouped tooltip with its
# two values from the data (TotalRevenue 10.32, HighestGrossing 2.07) and their total 12.39, with no units.
Then this category chart will have 2 visible series of Column type
When the user hovers slightly below the category point with label Star Wars
Then the data tooltip named dataToolTip will contain one grouped tooltip with the following values:
  | BadgeType | Text             | ValueText | RowType |
  |           | Star Wars        |           | Header  |
  | Square    | Total Revenue    | 10.32     | Series  |
  | Square    | Highest Grossing | 2.07      | Series  |
  |           | Total            | 12.39     | Summary |
