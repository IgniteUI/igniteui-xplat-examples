# Selection: allowSliceSelection on a RingSeries over EnergyGlobalDemand (innerExtent 0.6) with a horizontal Category ItemLegend.
Given the sample does not alter its data's casing
Then this legend will have items with text: Cooling,Residential,Heating,Lighting,Other
Then this legend will be horizontal with these Labels:
  | Label |
  | Cooling |
  | Residential |
  | Heating |
  | Lighting |
  | Other |
# The donut-chart documentation teaches click selection. Slice 2 starts unselected
# on every head, including web heads that initially select slice 1 in view init.
When we click slice 2 from ringSeries
Then slice 2 from ringSeries in doughnut chart chart will be selected
When we click slice 2 from ringSeries
Then slice 2 from ringSeries in doughnut chart chart will be unselected
