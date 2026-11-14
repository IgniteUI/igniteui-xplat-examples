# Cell editing with single-click edit mode: a click opens an editor, Escape cancels, a typed value commits on Enter and is undoable.
# Star columns at their minimum widths can overflow the sample's width, so the trailing visible columns depend on the host's viewport.
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
