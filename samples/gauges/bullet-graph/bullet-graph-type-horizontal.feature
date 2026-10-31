# Horizontal bullet graphs: three graphs with four 25-wide ranges, target 80, labels every 5 and 4 minor ticks
# per interval.
# Several bullet graphs are hydrated; the last one in the sample JSON (graph3, value 40, ranges #CF0000/#FF0000/#FD3939/#FA6363) is the current graph the steps read.
# The value bar has no explicit brush, and the only value step also checks the brush (see report).
# Range positions are not asserted: the sample leaves scaleStartExtent/scaleEndExtent unset, and the range
# analysis reads them from the client wrapper, which only knows values the sample set.
Then this bullet graph will has its target value set to 80
Then this bullet graph will have 4 range/ranges
Then range1 will be colored in #CF0000
Then range1 will have outline colored in #CF0000
Then range2 will be colored in #FF0000
Then range2 will have outline colored in #FF0000
Then range3 will be colored in #FD3939
Then range3 will have outline colored in #FD3939
Then range4 will be colored in #FA6363
Then range4 will have outline colored in #FA6363
Then this bullet graph will have labels reading:
  | labelValues |
  | 0 |
  | 5 |
  | 10 |
  | 15 |
  | 20 |
  | 25 |
  | 30 |
  | 35 |
  | 40 |
  | 45 |
  | 50 |
  | 55 |
  | 60 |
  | 65 |
  | 70 |
  | 75 |
  | 80 |
  | 85 |
  | 90 |
  | 95 |
  | 100 |
Then this bulletgraph will have 21 major tick marks
Then this bulletgraph will have 80 minor tick marks
