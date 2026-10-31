# Axis labels: gray Titillium Web labels at 0 rotation, y labels outside right.
Then this category chart will have xAxis labels with 'gray' foreground
Then this category chart will have yAxis labels with 'gray' foreground
Then this category chart will have xAxis labels with 0 rotation
Then this category chart will have yAxis labels with 0 rotation
When we are talking about the axis with name yAxis
Then this axis labels will be on the right side of the chart
Then this category chart will have xAxis labels matching the Year column of sample data named CountryRenewableElectricity
When we are talking about the series at index 0
Then this series shapes will match the Europe column of sample data named CountryRenewableElectricity within small tolerance
When we are talking about the series at index 1
Then this series shapes will match the China column of sample data named CountryRenewableElectricity within small tolerance
When we are talking about the series at index 2
Then this series shapes will match the America column of sample data named CountryRenewableElectricity within small tolerance
# The editor rotates the x labels and recolors them.
When we choose '45' from the 'X Axis Label Angle' row in the property editor panel
Then this category chart will have xAxis labels with 45 rotation
When we choose 'green' from the 'X Axis Label Color' row in the property editor panel
Then this category chart will have xAxis labels with 'green' foreground
