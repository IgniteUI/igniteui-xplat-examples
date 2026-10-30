# Column chart of TemperatureAverageData with SelectionColorFill selection (behavior Auto, which resolves to
# PerSeriesAndDataItemMultiSelect) in purple. Clicking the Jul column (29) selects that item of the Temperature
# series: only Jul takes the selection fill, the other months keep the palette fill (#8BDC5C).
Then this category chart will have 1 visible series of Column type
When we are talking about the series at index 0
And the user clicks on the shape with label Jul
Then the selected series items collection will have the following items:
  | SeriesMemberPath | SeriesMemberPathType | DataItem                 |
  | Temperature      | ValueMemberPath      | Month=Jul;Temperature=29 |
Then this series will have labeled shapes with fill purple and outline #8BDC5C at the following labels: Jul
Then this series will have labeled shapes with fill #8BDC5C and outline #8BDC5C at the following labels: Jan,Feb,Mar,Apr,May,Jun,Aug,Sep,Oct,Nov,Dec
