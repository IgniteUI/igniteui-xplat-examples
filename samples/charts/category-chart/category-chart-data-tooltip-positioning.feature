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
# Choosing the Individual grouping mode in the editor gives each series its own data tooltip.
When we choose 'Individual' from the 'Grouping Mode: ' row in the property editor panel
When the user hovers slightly below the category point with label Star Wars
Then the data tooltip named dataToolTip will contain multiple tooltips with the following values:
  | TooltipNumber | BadgeType | C1-Text          | C2-Text | RowType |
  | 1             |           | Star Wars        | [NULL]  | Header  |
  | 1             | Square    | Total Revenue    | 10.32   | Series  |
  | 2             |           | Star Wars        | [NULL]  | Header  |
  | 2             | Square    | Highest Grossing | 2.07    | Series  |
