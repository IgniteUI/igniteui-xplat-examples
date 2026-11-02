# SelectableData drawn as two overlapping Column series, DataValue and SelectedValue; the sample's SeriesPointerDown
# handler toggles an item's SelectedValue between its DataValue and empty. Initially SelectedValue is drawn as the
# data has it; clicking the 2011 DataValue column (40) selects it, so SelectedValue gains 40 at 2011.
Then this category chart will have 2 visible series of Column type
When we are talking about the series at index 1
Then this series shapes will match the SelectedValue column of sample data named SelectableData within small tolerance
When we are talking about the series at index 0
And the user clicks on the shape with label 2011
When we are talking about the series at index 1
Then this series shapes will match category values within small tolerance:
  | Value |
  | 20    |
  | 40    |
  | NaN   |
  | 50    |
  | NaN   |
  | 60    |
  | NaN   |
  | NaN   |
  | 50    |
  | 75    |
  | NaN   |
  | NaN   |
  | NaN   |
  | 65    |
  | 70    |
  | NaN   |
