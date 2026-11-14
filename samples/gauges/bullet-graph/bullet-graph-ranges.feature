# Comparative ranges: #C62828 0-40, #F96232 40-70 and #FF9800 70-100 (outlined in the same colors) behind a
# value of 80 and a target of 90, labels every 10.
# Range positions are not asserted: the sample leaves scaleStartExtent/scaleEndExtent unset, and the range
# analysis reads them from the client wrapper, which only knows values the sample set.
Then this bullet graph will have 3 range/ranges
Then range1 will be colored in #C62828
Then range1 will have outline colored in #C62828
Then range2 will be colored in #F96232
Then range2 will have outline colored in #F96232
Then range3 will be colored in #FF9800
Then range3 will have outline colored in #FF9800
Then this bullet graph will has its target value set to 90
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
