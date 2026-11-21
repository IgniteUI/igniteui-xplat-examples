# Doughnut RingSeries over EnergyGlobalDemand with a horizontal ItemLegend fed by legendLabelMemberPath=Category.
Given the sample does not alter its data's casing
Then this legend will have items with text: Cooling,Residential,Heating,Lighting,Other
Then this legend will be horizontal with these Labels:
  | Label |
  | Cooling |
  | Residential |
  | Heating |
  | Lighting |
  | Other |
Then doughnut chart named chart will have 1 rendered ring series
And doughnut chart named chart will have the following rendered slices in ring series series:
  | Label           | Angle |
  | Cooling 37%     | 133.2 |
  | Residential 25% | 90    |
  | Heating 12%     | 43.2  |
  | Lighting 11%    | 39.6  |
  | Other 15%       | 54    |
