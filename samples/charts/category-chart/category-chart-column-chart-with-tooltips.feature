# Column chart of HighestGrossingMovies with a Legend and no toolTipType, so it uses the CategoryChart default, Data:
# hovering Star Wars shows one grouped data tooltip with its two values from the data (10.32, 2.07) and their total
# 12.39, and no item tooltips.
Then this category chart will have 2 visible series of Column type
When the user hovers slightly below the category point with label Star Wars
Then the data tooltip named dataToolTip will contain one grouped tooltip with the following values:
  | BadgeType | Text             | ValueText | RowType |
  |           | Star Wars        |           | Header  |
  | Square    | Total Revenue    | 10.32     | Series  |
  | Square    | Highest Grossing | 2.07      | Series  |
  |           | Total            | 12.39     | Summary |
When we are talking about the series at index 0
Then this series will have no default tooltips visible
