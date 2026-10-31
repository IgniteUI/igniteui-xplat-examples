# Line chart of the Europe column of CountryRenewableElectricity (2009-2020) with both axes inverted: years run
# right to left (2020 first) and the y axis runs top to bottom from low to high (10 at the top, 90 at the bottom).
Then this category chart will have 1 visible series of Line type
When we are talking about the axis with name xAxis
Then this axis will have labels visible with these values: 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009
When we are talking about the axis with name yAxis
Then this axis will have labels visible with these values: 10, 20, 30, 40, 50, 60, 70, 80, 90
When we are talking about the series at index 0
Then this series shapes will match the Europe column of sample data named CountryRenewableElectricity within small tolerance
# Unchecking each "Inverted" box in the editor restores that axis's direction: years left to right, and values bottom
# to top (listed top to bottom).
When we click the 'X Axis - Inverted' row in the property editor panel
When we are talking about the axis with name xAxis
Then this axis will have labels visible with these values: 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020
When we click the 'Y Axis - Inverted' row in the property editor panel
When we are talking about the axis with name yAxis
Then this axis will have labels visible with these values: 90, 80, 70, 60, 50, 40, 30, 20, 10
