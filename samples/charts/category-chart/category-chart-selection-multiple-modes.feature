# Column chart of EnergyRenewableConsumption with SelectionColorFill selection, PerSeriesAndDataItemGlobalSingleSelect,
# in orange. Every numeric column is a series, Year included, so the series are Year, Hydro, Solar, Wind and Other in
# palette order; Hydro (index 1) is #8961A9. Clicking Hydro at Europe (632.54) selects that one item: only that column
# takes the selection fill.
Then this category chart will have 5 visible series of Column type
When we are talking about the series at index 1
And the user clicks on the shape with label Europe
Then the selected series items collection will have the following items:
  | SeriesMemberPath | SeriesMemberPathType | DataItem                                                                 |
  | Hydro            | ValueMemberPath      | Location=Europe;Year=2019;Hydro=632.54;Solar=154;Wind=461.3;Other=220.3 |
Then this series will have labeled shapes with fill orange and outline #8961A9 at the following labels: Europe
Then this series will have labeled shapes with fill #8961A9 and outline #8961A9 at the following labels: China,USA,Brazil,Canada
# Switching the editor's selection mode to SelectionColorOutline moves the selection color from the selected column's
# fill to its outline.
When we choose 'SelectionColorOutline' from the 'Selection Mode: ' row in the property editor panel
When we are talking about the series at index 1
Then this series will have labeled shapes with fill #8961A9 and outline orange at the following labels: Europe
Then this series will have labeled shapes with fill #8961A9 and outline #8961A9 at the following labels: China,USA,Brazil,Canada
