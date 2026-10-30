# User annotations enabled on a three-line renewable-electricity chart with a toolbar; the plotted lines are the annotation targets.
# Creating a user annotation through the toolbar has no step today (see report); the chart it annotates is asserted here.
When we are talking about the axis with name xAxis
# CALIBRATE: 12 category labels (2018 appears twice in the data) with no interval set; confirm none are skipped at the host size.
# With no interval set, a category axis shows at most 10 labels; the 12 years (2018 is listed twice) are labelled every other one.
Then this axis will have labels visible with these values: 2009, 2011, 2013, 2015, 2017, 2019
When we are talking about the axis with name yAxis
Then this axis title will display text 'TWh'
When we are talking about the series with name lineSeries1
Then this series shapes will match the America column of sample data named CountryRenewableElectricity within small tolerance
When we are talking about the series with name lineSeries2
Then this series shapes will match the Europe column of sample data named CountryRenewableElectricity within small tolerance
When we are talking about the series with name lineSeries3
Then this series shapes will match the China column of sample data named CountryRenewableElectricity within small tolerance
