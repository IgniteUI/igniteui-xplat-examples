# Explosion: LocalData (MarketShare) with explodedSlices [1, 2] (Residential, Heating) at explodedRadius 0.2; Company legend items.
Then this legend will have items with text: Cooling,Residential,Heating,Lighting,Other
Then this legend will be horizontal with these Labels:
  | Label |
  | Cooling |
  | Residential |
  | Heating |
  | Lighting |
  | Other |
# Gap: no step reads PieChart/DoughnutChart slices (WidgetManager.GetAnalyzers has no PieChart/DoughnutChart case).
# Wanted: Then this pie chart will have exploded slices: Residential,Heating  (exploded slice centers offset by 0.2 of the radius)
# Wanted: When the user clicks on the pie chart slice with label <Label>  (sliceClick toggles explosion)
