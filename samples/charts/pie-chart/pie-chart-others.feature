# Others category: othersCategoryType Number, threshold 10. Every EnergyGlobalDemand value (37,25,12,11,15) is above 10,
# so no row is folded into an 'Others' slice and the legend keeps all five Category items and no 'Others' item.
Then this legend will have items with text: Cooling,Residential,Heating,Lighting,Other
Then this legend will be horizontal with these Labels:
  | Label |
  | Cooling |
  | Residential |
  | Heating |
  | Lighting |
  | Other |
# Gap: no step reads PieChart/DoughnutChart slices (WidgetManager.GetAnalyzers has no PieChart/DoughnutChart case).
# Wanted: Then this pie chart will have slices with the following properties: | Label | Value | (5 slices, none labelled Others)
