# Chart synchronization: two OHLC charts (Google on top, Amazon below) on sync channel ChannelA, synchronized both
# horizontally and vertically. Only the top chart is reachable by the current steps (see report).
Then this chart will have a subtitle with attributes:
  | Text |
  | Google Stock Prices |
When we are talking about the series with name series1
Then this series shapes will match these plotted OHLC values in visual order:
  | Label | Open | High | Low | Close |
  | 2014-03-01 | 559.6 | 568.2 | 558.4 | 566.9 |
  | 2014-03-02 | 562.4 | 571.8 | 561.4 | 567 |
  | 2014-03-03 | 569.9 | 587.3 | 564.1 | 569.7 |
  | 2014-03-04 | 574.6 | 577.8 | 543 | 543.1 |
