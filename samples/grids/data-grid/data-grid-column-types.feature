# Column types: image, text, template, numeric, date and a ComboBoxColumn for Country fed by CountryNames.
Then this grid will have the header cells with the following text: Photo, Name, Sales, Salary, Date of Birth, Country, Flag
When we scroll the grid so that column 6 is visible
# The grid's default editMode (Cell) and DoubleClick edit action open the combo editor.
And the user double clicks cell at row 0 column Country
And the user clicks the combo arrow
Then the combo dropdown will display the following items
  | item   |
  | Canada |
  | France |
  | Poland |
  | UK     |
  | USA    |
