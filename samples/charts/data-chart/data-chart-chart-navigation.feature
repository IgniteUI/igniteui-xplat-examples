# Chart navigation: a zoomable candlestick chart of StockTesla (drag-pan by default, Alt pans, Shift zooms) with
# buttons that pan and zoom the window. Zooming the window to the first half must drop the later dates off the axis.
Then this chart will have a subtitle with attributes:
  | Text |
  | Stock Prices Series in Candlestick Display Type |
When we are talking about the axis with name yAxis
Then this axis title will display text 'Amount (in USD)'
When we are talking about the series with name priceSeries
Then this series shapes will match these plotted OHLC values in visual order:
  | Label | Open | High | Low | Close |
  | 2019-01-10 | 20.4 | 23 | 19.8 | 23 |
  | 2019-01-22 | 22.8 | 23.5 | 19.7 | 19.9 |
  | 2020-05-12 | 46.7 | 56.2 | 46.5 | 54 |
  | 2022-03-02 | 278 | 296.6 | 233.3 | 293.3 |
  | 2025-04-28 | 243.5 | 294.9 | 222.8 | 285.9 |
When we set the charts window rect to 0,0,0.5,1
When we are talking about the axis with name xAxis
Then this axis will contain a labels for 2019-01-10
Then this axis will have labels visible which do not include: 2023-03-14, 2023-03-23, 2023-04-03, 2023-04-13, 2023-04-24, 2023-05-03, 2023-05-12, 2023-05-23, 2023-06-02, 2023-06-13, 2023-06-23, 2023-07-05, 2023-07-14, 2023-07-25, 2023-08-03, 2023-08-14, 2023-08-23, 2023-09-01, 2023-09-13, 2023-09-22, 2023-10-03, 2023-10-12, 2023-10-23, 2023-11-01, 2023-11-10, 2023-11-21, 2023-12-01, 2023-12-12, 2023-12-21, 2024-01-03, 2024-01-12, 2024-01-24, 2024-02-02, 2024-02-13, 2024-02-23, 2024-03-05, 2024-03-14, 2024-03-25, 2024-04-04, 2024-04-15, 2024-04-24, 2024-05-03, 2024-05-14, 2024-05-23, 2024-06-04, 2024-06-13, 2024-06-25, 2024-07-05, 2024-07-16, 2024-07-25, 2024-08-05, 2024-08-14, 2024-08-23, 2024-09-04, 2024-09-13, 2024-09-24, 2024-10-03, 2024-10-14, 2024-10-23, 2024-11-01, 2024-11-12, 2024-11-21, 2024-12-03, 2024-12-12, 2024-12-23, 2025-01-03, 2025-01-15, 2025-01-27, 2025-02-05, 2025-02-14, 2025-02-26, 2025-03-07, 2025-03-18, 2025-03-27, 2025-04-07, 2025-04-16, 2025-04-28
