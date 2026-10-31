# Axis sharing: one category x axis (StockTesla dates) shared by a Volume column series on the left 'Trade Volume' axis
# (abbreviated, no gridlines) and a candlestick price series on the right 'Stock Price ($)' axis.
When we are talking about the series with name volumeSeries
Then this series shapes will match the Volume column of sample data named StockTesla within small tolerance
When we are talking about the series with name stockSeries
Then this series shapes will match these plotted OHLC values in visual order:
  | Label | Open | High | Low | Close |
  | 2019-01-10 | 20.4 | 23 | 19.8 | 23 |
  | 2019-01-22 | 22.8 | 23.5 | 19.7 | 19.9 |
  | 2020-05-12 | 46.7 | 56.2 | 46.5 | 54 |
  | 2022-03-02 | 278 | 296.6 | 233.3 | 293.3 |
  | 2025-04-28 | 243.5 | 294.9 | 222.8 | 285.9 |
When we are talking about the axis with name yAxisRight
Then this axis title will display text 'Stock Price ($)'
When we are talking about the axis with name yAxisLeft
Then this axis title will display text 'Trade Volume'
Then this axis will have major gridlines with thickness 0
# CALIBRATE: the auto interval and abbreviated text of the volume axis (max volume 3,748,903,126)
Then this axis will contain a labels for 0, 1B, 2B, 3B
