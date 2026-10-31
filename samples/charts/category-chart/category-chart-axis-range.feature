# Line chart of CountryRenewableElectricity (Europe, China and America by Year) with the y axis range fixed to 0..150.
Then this category chart will have 3 visible series of Line type
When we are talking about the series at index 0
Then this series shapes will match the Europe column of sample data named CountryRenewableElectricity within small tolerance
When we are talking about the series at index 1
Then this series shapes will match the China column of sample data named CountryRenewableElectricity within small tolerance
When we are talking about the series at index 2
Then this series shapes will match the America column of sample data named CountryRenewableElectricity within small tolerance
When we are talking about the axis with name yAxis
Then this axis range will have a minimum value of 0 and a maximum value of 150
# The editor's range combos set the y axis minimum to 20 and then its maximum to 200.
When we choose '20' from the 'Y Axis Minimum Value' row in the property editor panel
When we are talking about the axis with name yAxis
Then this axis range will have a minimum value of 20 and a maximum value of 150
When we choose '200' from the 'Y Axis Maximum Value' row in the property editor panel
When we are talking about the axis with name yAxis
Then this axis range will have a minimum value of 20 and a maximum value of 200
