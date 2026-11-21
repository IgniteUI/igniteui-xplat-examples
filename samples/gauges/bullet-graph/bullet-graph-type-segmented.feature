# Segmented bullet graphs: a status-colored range filled to the value over a #E0DFDF track, cut into segments
# by white ticks (thickness 2) spanning the bar, target at 80 (the value bar itself is transparent).
# Several bullet graphs are hydrated; the last one in the sample JSON (graph3, #FF0000 fill to 50) is the current graph the steps read.
Then this bullet graph will has its target value set to 80
Then this bullet graph will have 2 range/ranges
Then range1 will start from 0 and will end in 100
Then range1 will be colored in #E0DFDF
Then range1 will have outline colored in #E0DFDF
Then range2 will start from 0 and will end in 50
Then range2 will be colored in #FF0000
Then range2 will have outline colored in #FF0000
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
# The tick analyzer separates major from minor ticks by stroke thickness (2 = major, 1 = minor), so when
# both share a thickness the count below is majors plus minors.
Then All 51 major ticks will have thickness of 2
Then All 51 major ticks will have white color
