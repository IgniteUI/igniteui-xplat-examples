# Column chart of CountryRenewableElectricity (Europe, China and America by Year), one label per year, with an x axis
# gap of 0.5 (maximum 1.5): half of each category is left empty around its columns.
Then this category chart will have 3 visible series of Column type
Then this category chart will have xAxis labels matching the Year column of sample data named CountryRenewableElectricity
Then this category chart will have yAxis title with 'TWh' text
When we are talking about the series at index 0
Then this series shapes will match the Europe column of sample data named CountryRenewableElectricity within small tolerance
When we are talking about the series at index 1
Then this series shapes will match the China column of sample data named CountryRenewableElectricity within small tolerance
When we are talking about the series at index 2
Then this series shapes will match the America column of sample data named CountryRenewableElectricity within small tolerance
When we are talking about the axis with name xAxis
Then this axis will have total gap of 0.5 between categories and series shapes
