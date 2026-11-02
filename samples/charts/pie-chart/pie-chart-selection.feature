# Selection: selectionMode Multiple over LocalData (MarketShare); selected slices get opacity 0.85, stroke rgba(0,0,0,0.5) thickness 4.
Then this legend will have items with text: Cooling,Residential,Heating,Lighting,Other
Then this legend will be horizontal with these Labels:
  | Label |
  | Cooling |
  | Residential |
  | Heating |
  | Lighting |
  | Other |
# Gap: no step reads PieChart/DoughnutChart slices (WidgetManager.GetAnalyzers has no PieChart/DoughnutChart case).
# Wanted: When the user clicks on the pie chart slice with label <Label>
# Wanted: Then this pie chart will have selected slices: <Labels>  (with stroke rgba(0,0,0,0.5), thickness 4, opacity 0.85)
