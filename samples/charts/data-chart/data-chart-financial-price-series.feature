# Candlestick FinancialPriceSeries over Stock2Years: one OHLC candle per month, a label for every month (interval 1).
# Month names repeat across the two years, so each candle is addressed by its label and which occurrence of that label it is.
When we are talking about the axis with name xAxis
Then this axis will have labels visible with these values: 2020, FEB, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT, NOV, DEC, 2021, FEB, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT, NOV, DEC
When we are talking about the series with name series1
Then this series shapes will match these plotted OHLC values at repeated category labels:
  | Label | Occurrence | Open | Close | High | Low  |
  | 2020  | 1          | 41.1 | 41.4  | 41.6 | 41.1 |
  | FEB   | 1          | 41.4 | 41.4  | 41.7 | 41.2 |
  | MAR   | 1          | 41.3 | 41    | 41.3 | 40.7 |
  | APR   | 1          | 41.3 | 39.9  | 41.4 | 39.6 |
  | MAY   | 1          | 40   | 39.8  | 40.3 | 39.7 |
  | JUN   | 1          | 39.8 | 39.8  | 39.9 | 39.2 |
  | JUL   | 1          | 39.9 | 40.5  | 40.5 | 39.9 |
  | AUG   | 1          | 40.4 | 39.4  | 40.7 | 39.1 |
  | SEP   | 1          | 39   | 39.2  | 39.8 | 39   |
  | OCT   | 1          | 39.1 | 39.2  | 39.4 | 38.9 |
  | NOV   | 1          | 39.3 | 39.8  | 40   | 39   |
  | DEC   | 1          | 40.1 | 40.4  | 40.4 | 39.9 |
  | 2021  | 1          | 40   | 40    | 40.2 | 39.5 |
  | FEB   | 2          | 40.1 | 39.9  | 40.1 | 39.8 |
  | MAR   | 2          | 40   | 40    | 40.1 | 39.8 |
  | APR   | 2          | 40   | 39.7  | 40   | 39.5 |
  | MAY   | 2          | 39.7 | 39.9  | 40   | 39.3 |
  | JUN   | 2          | 40.3 | 39.9  | 40.7 | 39.8 |
  | JUL   | 2          | 40.1 | 40.9  | 41.3 | 40.1 |
  | AUG   | 2          | 41.1 | 40.5  | 41.2 | 40.4 |
  | SEP   | 2          | 39   | 39.2  | 39.8 | 39   |
  | OCT   | 2          | 39.1 | 39.2  | 39.4 | 38.9 |
  | NOV   | 2          | 39.3 | 39.8  | 40   | 39   |
  | DEC   | 2          | 40.1 | 40.4  | 40.4 | 39.9 |
