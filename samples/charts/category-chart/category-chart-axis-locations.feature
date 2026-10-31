# Axis locations: y axis labels placed outside right of the plot area.
When we are talking about the axis with name yAxis
Then this axis labels will be on the right side of the chart
Then this category chart will have yAxis title with 'Labels Location' text
Then this category chart will have xAxis labels matching the Year column of sample data named CountryRenewableElectricity
When we are talking about the series at index 0
Then this series shapes will match the Europe column of sample data named CountryRenewableElectricity within small tolerance
When we are talking about the series at index 1
Then this series shapes will match the China column of sample data named CountryRenewableElectricity within small tolerance
When we are talking about the series at index 2
Then this series shapes will match the America column of sample data named CountryRenewableElectricity within small tolerance
# Moving the y labels outside left in the editor puts them on the chart's left side.
When we choose 'OutsideLeft' from the 'Y Axis - Label Location' row in the property editor panel
When we are talking about the axis with name yAxis
Then this axis labels will be on the left side of the chart
