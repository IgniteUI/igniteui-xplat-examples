# ID, FirstName and LastName are pinned Left (changeable via the DataGridToolbar column pinning UI); after scrolling to the last column the pinned ID values stay in view.
# CALIBRATE: visible header prefix assumes the ~780px-wide GTK sampleSurface; star columns at their minimum widths overflow it, so the trailing column set depends on the real viewport.
Then this grid will have the header cells with the following text: ID, FirstName, LastName, Birthday, Age
Then this grid will have data cells with these values in the visible rows:
  | ID   |
  | 1001 |
  | 1002 |
  | 1003 |
When we scroll the grid so that column 12 is visible
Then this grid will have data cells with these values in the visible rows:
  | ID   |
  | 1001 |
  | 1002 |
  | 1003 |
