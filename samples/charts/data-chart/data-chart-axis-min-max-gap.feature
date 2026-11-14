# Axis minimum gap: the category x axis keeps at least 25px (minimumGapSize) between the Temperature columns.
When we are talking about the series with name columnSeries1
Then this series shapes will match the Temperature column of sample data named TemperatureAverageData within small tolerance
When we are talking about the axis with name xAxis
Then this axis will have labels visible with these values: Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec
# The default gap would leave about 6px between the columns at this size, so the 25px minimum is what holds them apart.
When we are talking about the series with name columnSeries1
Then this series will have a gap of 25 pixels between neighbouring shapes
