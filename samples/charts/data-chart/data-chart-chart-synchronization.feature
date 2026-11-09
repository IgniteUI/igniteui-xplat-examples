# Chart synchronization: two OHLC charts (Google on top, Amazon below) on sync channel ChannelA, synchronized both
# horizontally and vertically. Each stock has close to a thousand rows, more than one per pixel, so the bars are
# bucketed and cannot be matched to data rows; the sample is asserted by its synchronization instead: zooming
# either chart moves the other chart's window with it.
When we are talking about the chart named chart1
Then this chart will have a subtitle with attributes:
  | Text |
  | Google Stock Prices |
When we are talking about the series with name series1
Then this chart will have a window rect of 0,0,1,1
When we are talking about the chart named chart2
Then this chart will have a subtitle with attributes:
  | Text |
  | Amazon Stock Prices |
When we are talking about the series with name series2
Then this chart will have a window rect of 0,0,1,1
When we are talking about the chart named chart1
When we are talking about the series with name series1
When we set the charts window rect to 0.25,0.2,0.5,0.4
Then this chart will have a window rect of 0.25,0.2,0.5,0.4
When we are talking about the chart named chart2
When we are talking about the series with name series2
Then this chart will have a window rect of 0.25,0.2,0.5,0.4
When we set the charts window rect to 0.1,0.3,0.6,0.5
Then this chart will have a window rect of 0.1,0.3,0.6,0.5
When we are talking about the chart named chart1
When we are talking about the series with name series1
Then this chart will have a window rect of 0.1,0.3,0.6,0.5
