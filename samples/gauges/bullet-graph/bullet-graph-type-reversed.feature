# Bullet graphs where the value passes the target: the content graph (graph2, hydrated last and so current)
# has value 30 against a target of 20 over red-shaded ranges #CF0000/#FF0000/#FD3939/#FA6363.
# The value bar has no explicit brush, and the only value step also checks the brush (see report).
# Range positions are not asserted: the sample leaves scaleStartExtent/scaleEndExtent unset, and the range
# analysis reads them from the client wrapper, which only knows values the sample set.
Then this bullet graph will has its target value set to 20
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
Then this bulletgraph will have 11 major tick marks
