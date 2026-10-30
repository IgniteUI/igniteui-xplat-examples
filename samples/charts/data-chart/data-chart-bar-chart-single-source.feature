# Single-source bar chart: percent of online shopping searches per shop on an inverted category y axis with
# '{0}%' value labels on the x axis.
When we are talking about the series with name BarSeries1
Then this series shapes will match the Percent column of sample data named OnlineShoppingSearches within small tolerance in reverse order
When we are talking about the axis with name yAxis
Then this axis will contain a labels for Amazon, Search Engines, Retailer Sites, Marketplaces, Brand Website, Comparison Sites, Social Media, Other
When we are talking about the axis with name xAxis
# CALIBRATE: auto range/interval over a 63 maximum (0..70 by 10 expected)
Then this axis will have labels visible with these values: 0%, 10%, 20%, 30%, 40%, 50%, 60%, 70%
When we are talking about the series with name BarSeries1
When the user hovers over category point with label Amazon
Then the data tooltip named Tooltips will have a visible tooltip
