# Filter row with three columns whose headers describe how each column's custom operand is registered (code-behind, class, in-line).
Then this grid will have the header cells with the following text: Code-behind Filter*, Custom Class Filter**, In-line Filter***
Then the visible rows will be in this order: Item, Item, Item
When we enter the following values into the filter row:
  | ColumnName            | Value |
  | Custom Class Filter** | 99    |
Then the visible grid will have no cells
