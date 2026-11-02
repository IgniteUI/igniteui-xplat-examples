# Cell editing with single-click edit mode: a click opens an editor, Escape cancels, a typed value commits on Enter and is undoable.
# CALIBRATE: visible header prefix assumes the ~780px-wide GTK sampleSurface; star columns at their minimum widths overflow it, so the trailing column set depends on the real viewport.
Then this grid will have the header cells with the following text: Name, Street, City, Salary, Photo, Date of Birth
When the user clicks in the following cells in the relative visible rows:
  | RelativeRowNumber | ColumnKey |
  | 0                 | Name      |
Then the grid will have an editor visible
When the user presses the Escape Key
Then the grid will not have an editor visible
When we update the following cells with the specified values after clicking the cells:
  | RelativeRowNumber | ColumnKey | Value  |
  | 0                 | City      | Gotham |
And the user presses the Enter Key
Then this grid will have data cells with these values in the visible rows:
  | City   |
  | Gotham |
And the grid will allow us to undo edits
