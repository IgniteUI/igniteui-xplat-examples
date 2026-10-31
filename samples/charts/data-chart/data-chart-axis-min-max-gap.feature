# Axis minimum gap: the category x axis keeps at least 25px (minimumGapSize) between the Temperature columns.
When we are talking about the series with name columnSeries1
Then this series shapes will match the Temperature column of sample data named TemperatureAverageData within small tolerance
When we are talking about the axis with name xAxis
Then this axis will have labels visible with these values: Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec
# CALIBRATE: 25 is the configured minimumGapSize; the actual gap is max(25px, gap fraction * category width)
Then this axis will have total gap of 25 between categories and series shapes
