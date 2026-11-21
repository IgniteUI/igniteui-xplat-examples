# MultipleRow selection: a click plus a Ctrl-click selects two rows.
# CALIBRATE: visible header prefix assumes the ~780px-wide GTK sampleSurface; star columns at their minimum widths overflow it, so the trailing column set depends on the real viewport.
Then this grid will have the header cells with the following text: Name, Street, City, Salary, Photo, Date of Birth
When the user selects the following cells in the relative visible rows using modifier keys:
  | RelativeRowNumber | ColumnKey | ModifierKey |
  | 1                 | Name      |             |
  | 3                 | Street    | Cntl        |
Then the grid will have the following selected rows:
  | RelativeRowNumber |
  | 1                 |
  | 3                 |
