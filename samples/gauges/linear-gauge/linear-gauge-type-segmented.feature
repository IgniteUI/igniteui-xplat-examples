# Segmented gauges: a Red range filled to the value is cut into segments by white ticks (thickness 2) that span
# the scale's full breadth, 4 minor ticks per interval.
# Several gauges are hydrated; the last one in the sample JSON (gauge3, value 30, Red 0-30 fill) is the current gauge the steps read.
Then this linear gauge's needle will be at 30
Then this linear gauge will have 1 range/ranges
Then linear gauge range1 will start from 0 and will end in 30
Then linear gauge range1 will be colored in Red
Then linear gauge range1 will have outline colored in Red
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
# The tick analyzer separates major from minor ticks by stroke thickness (2 = major, 1 = minor), so when
# both share a thickness the count below is majors plus minors.
Then All 51 linear gauge major ticks will have thickness of 2
Then All 51 linear gauge major ticks will have white color
Then this linear gauge scale will have #E0DFDF background
