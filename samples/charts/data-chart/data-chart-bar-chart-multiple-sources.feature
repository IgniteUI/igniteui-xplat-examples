# Bar chart with two bar series sharing an inverted category y axis of franchises (gap 0.5, overlap -0.1).
When we are talking about the series with name BarSeries1
Then this series shapes will match the TotalRevenue column of sample data named HighestGrossingMovies within small tolerance in reverse order
When we are talking about the series with name BarSeries2
Then this series shapes will match the HighestGrossing column of sample data named HighestGrossingMovies within small tolerance in reverse order
When we are talking about the axis with name yAxis
Then this axis will contain a labels for Marvel Universe, Star Wars, Harry Potter, Avengers, Spider Man, James Bond
When we are talking about the axis with name xAxis
Then this axis title will display text 'Billions of U.S. Dollars'
Then this legend will have items with text: Total Revenue of Franchise,Highest Grossing Movie in Series
