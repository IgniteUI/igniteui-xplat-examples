# Column chart of HighestGrossingMovies (TotalRevenue and HighestGrossing by Franchise), one label per franchise, with an
# x axis overlap of 1: the two series' columns are drawn fully over one another.
Then this category chart will have 2 visible series of Column type
Then this category chart will have xAxis labels matching the Franchise column of sample data named HighestGrossingMovies
When we are talking about the series at index 0
Then this series shapes will match the TotalRevenue column of sample data named HighestGrossingMovies within small tolerance
When we are talking about the series at index 1
Then this series shapes will match the HighestGrossing column of sample data named HighestGrossingMovies within small tolerance
When we are talking about the axis with name xAxis
Then all series are overlapping each other 100 percent
