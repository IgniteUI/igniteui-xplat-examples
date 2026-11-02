# ItemLegend (Horizontal) attached to the PieChart: one item per EnergyGlobalDemand row, text from legendLabelMemberPath=Category,
# laid out left to right on a single row in data order.
Then this legend will have items with text: Cooling,Residential,Heating,Lighting,Other
Then this legend will be horizontal with these Labels:
  | Label |
  | Cooling |
  | Residential |
  | Heating |
  | Lighting |
  | Other |
# Gap: no step reads PieChart/DoughnutChart slices (WidgetManager.GetAnalyzers has no PieChart/DoughnutChart case).
# Wanted: Then this pie chart will have slices with the following properties: | Label | Value | (Summary labels, Value 37,25,12,11,15)
