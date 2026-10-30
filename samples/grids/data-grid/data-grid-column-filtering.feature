# Filter row (filterUIType FilterRow): an Age value outside the data's 20-40 range filters every row out; clearing it restores the rows.
# CALIBRATE: visible header prefix assumes the ~780px-wide GTK sampleSurface; star columns at their minimum widths overflow it, so the trailing column set depends on the real viewport.
Then this grid will have the header cells with the following text: Name, Age, Street, City, Country
When we enter the following values into the filter row:
  | ColumnName | Value |
  | Age        | 99    |
Then the visible grid will have no cells
When we clear the filter in filter row of column Age
Then the visible rows will be in this order: Item, Item, Item
