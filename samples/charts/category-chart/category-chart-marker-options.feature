# Marker options: every series renders circle markers on the data points.
Then this category chart will have 3 visible series of Line type
When we are talking about the series at index 0
Then this series will have markers with type Circle
Then this series shapes will match the Europe column of sample data named CountryRenewableElectricity within small tolerance
When we are talking about the series at index 1
Then this series will have markers with type Circle
Then this series shapes will match the China column of sample data named CountryRenewableElectricity within small tolerance
When we are talking about the series at index 2
Then this series will have markers with type Circle
Then this series shapes will match the America column of sample data named CountryRenewableElectricity within small tolerance
# Choosing Triangle in the editor's marker type gives every series triangle markers.
When we choose 'Triangle' from the 'Marker Type' row in the property editor panel
When we are talking about the series at index 0
Then this series will have markers with type Triangle
When we are talking about the series at index 1
Then this series will have markers with type Triangle
When we are talking about the series at index 2
Then this series will have markers with type Triangle
