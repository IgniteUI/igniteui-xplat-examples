# Column chart of ContinentsBirthRate: one series per continent over the census years, y labels formatted "{0}M".
Then this category chart will have 6 visible series of Column type
Then this category chart will have xAxis labels matching the Year column of sample data named ContinentsBirthRate
When we are talking about the series at index 0
Then this series shapes will match the Asia column of sample data named ContinentsBirthRate within small tolerance
When we are talking about the series at index 1
Then this series shapes will match the Africa column of sample data named ContinentsBirthRate within small tolerance
When we are talking about the series at index 2
Then this series shapes will match the Europe column of sample data named ContinentsBirthRate within small tolerance
When we are talking about the series at index 3
Then this series shapes will match the NorthAmerica column of sample data named ContinentsBirthRate within small tolerance
When we are talking about the series at index 4
Then this series shapes will match the SouthAmerica column of sample data named ContinentsBirthRate within small tolerance
When we are talking about the series at index 5
Then this series shapes will match the Oceania column of sample data named ContinentsBirthRate within small tolerance
# Filtering to 2000 in the editor leaves only that census year.
When we choose '2000' from the 'Modify Filter' row in the property editor panel
When we are talking about the axis with name xAxis
Then this axis will have labels visible with these values: 2000
