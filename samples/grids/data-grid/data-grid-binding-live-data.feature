# Live-data portfolio grid (ticker onViewInit is skipped under testing): ID column hidden, custom Close/Change headers, row hover disabled, multi-row selection.
# CALIBRATE: visible header prefix assumes the ~780px-wide GTK sampleSurface; star columns at their minimum widths overflow it, so the trailing column set depends on the real viewport.
Then this grid will have the header cells with the following text: Category, Type, Risk, Open, Close, Change ($), Change (%)
When the user hovers over the following cell in column Category in the relative visible row 1
Then the grid will not have a highlighted row
When the user selects the following cells in the relative visible rows using modifier keys:
  | RelativeRowNumber | ColumnKey | ModifierKey |
  | 0                 | Category  |             |
  | 2                 | Category  | Cntl        |
Then the grid will have the following selected rows:
  | RelativeRowNumber |
  | 0                 |
  | 2                 |
