# Two TrendLineLayers (logarithmic and cubic fit, period 10) over the Europe line series, both listed in the DataLegend.
When we are talking about the axis with name xAxis
# CALIBRATE: 12 category labels (2018 appears twice in the data) with no interval set; confirm none are skipped at the host size.
# With no interval set, a category axis shows at most 10 labels; the 12 years (2018 is listed twice) are labelled every other one.
Then this axis will have labels visible with these values: 2009, 2011, 2013, 2015, 2017, 2019
When we are talking about the series with name lineSeries1
Then this series shapes will match the Europe column of sample data named CountryRenewableElectricity within small tolerance
Then this series will have markers with type Circle
When we are talking about the series with name trendLine1
Then this series will have a trendline with some visible points
When we save trendline shape of this layer
When we are talking about the series with name trendLine2
Then this series will have a trendline with some visible points
Then this layer will have a trendline with different shape than the saved trendline
# The legend lists the series and both trend layers by title; the sample makes their value column transparent.
Then this data legend will have data rows with the following values:
  | C1-Text                               | C2-TextColor | RowType |
  | European Renewable Energy (2009-2018) | [NULL]       | Header  |
  | EU Energy                             | transparent  | Series  |
  | Logarithmic Trend                     | transparent  | Series  |
  | Cubic Trend                           | transparent  | Series  |
