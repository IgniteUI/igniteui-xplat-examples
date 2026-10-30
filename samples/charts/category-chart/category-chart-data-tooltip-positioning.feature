# Column chart of HighestGrossingMovies with a grouped data tooltip pinned right and top. Hovering Star Wars shows its
# two values from the data (10.32, 2.07) and their total 12.39. Where the tooltip is pinned is not asserted: no step
# reads a data tooltip's position yet.
When the user hovers slightly below the category point with label Star Wars
Then the data tooltip named dataToolTip will contain one grouped tooltip with the following values:
  | BadgeType | Text             | ValueText | RowType |
  |           | Star Wars        |           | Header  |
  | Square    | Total Revenue    | 10.32     | Series  |
  | Square    | Highest Grossing | 2.07      | Series  |
  |           | Total            | 12.39     | Summary |
