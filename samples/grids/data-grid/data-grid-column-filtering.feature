# Filter row (filterUIType FilterRow): an Age value outside the data's 20-40 range filters every row out; clearing it restores the rows.
# The grid snaps at a pixel scaling ratio of 1, as in the grid scenarios, whose layout assertions assume it.
Given the sample's content uses a pixel scaling ratio of 1
# Star columns at their minimum widths can overflow the sample's width, so the trailing visible columns depend on the host's viewport.
Then this grid will have the header cells with the following text: Name, Age, Street, City, Country, Sales
When we enter the following values into the filter row:
  | ColumnName | Value |
  | Age        | 99    |
Then the visible grid will have no cells
When we clear the filter in filter row of column Age
Then the visible rows will be in this order: Item, Item, Item
