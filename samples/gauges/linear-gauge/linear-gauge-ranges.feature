# Ranges: two tapered ranges 0-50 and 50-100 (outer extent 0.25 -> 0.4), both #a4bd29 outlined #F86232, on a
# 0-100 gauge (interval 10, value 50). The tapering itself is not assertable (see report).
# Range positions are not asserted: the sample leaves scaleStartExtent/scaleEndExtent unset, and the range
# analysis reads them from the client wrapper, which only knows values the sample set.
Then this linear gauge will have 2 range/ranges
Then linear gauge range1 will be colored in #a4bd29
Then linear gauge range1 will have outline colored in #F86232
Then linear gauge range2 will be colored in #a4bd29
Then linear gauge range2 will have outline colored in #F86232
Then this linear gauge's needle will be at 50
Then this linear gauge will have labels reading:
  | labelValues |
  | 0 |
  | 10 |
  | 20 |
  | 30 |
  | 40 |
  | 50 |
  | 60 |
  | 70 |
  | 80 |
  | 90 |
  | 100 |
