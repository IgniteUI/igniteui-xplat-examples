# Cell activation with keyboard navigation: Enter edits (enterBehavior Edit) and Enter after the edit moves down (enterBehaviorAfterEdit MoveDown).
Then this grid will have the header cells with the following text: Name, Photo, Age, Address, City, Country, Phone
When we are talking about the column named Age
Then all of the cells in this column appear to be aligned to the center horizontally
When the user clicks in the following cells in the relative visible rows:
  | RelativeRowNumber | ColumnKey |
  | 0                 | Name      |
Then the grid will display the following cell as active:
  | VisibleIndex | ColumnName |
  | 0            | Name       |
When the user presses the Down Arrow Key
Then the grid will display the following cell as active:
  | VisibleIndex | ColumnName |
  | 1            | Name       |
When the user presses the Right Arrow Key
And the user presses the Right Arrow Key
Then the grid will display the following cell as active:
  | VisibleIndex | ColumnName |
  | 1            | Age        |
When the user presses the Enter Key
Then the grid will have an editor visible
When the user presses the Enter Key
Then the grid will not have an editor visible
And the grid will display the following cell as active:
  | VisibleIndex | ColumnName |
  | 2            | Age        |
