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
# Choosing the Item tooltip type in the editor replaces the data tooltip layer with an item tooltip layer, which gives
# each series its own tooltip.
When we choose 'Item' from the 'ToolTip Type: ' row in the property editor panel
Then this domain chart will have a ItemToolTipLayer annotation layer
Then this domain chart will not have a DataToolTipLayer annotation layer
