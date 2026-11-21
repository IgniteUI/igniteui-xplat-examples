# Curved gauge: 50 two-unit ranges from #009f00 through #e0fd6a to #e9002c whose outer extents trace a curve,
# a #494949 triangle needle at 80, black labels every 10 and Gray ticks (9 minor per interval) on a #E0DFDF scale.
# Range positions are not asserted: the sample leaves scaleStartExtent/scaleEndExtent unset, and the range
# analysis reads them from the client wrapper, which only knows values the sample set.
Then this linear gauge's needle will be at 80
Then this liniear gauge will have 'triangle' needle shape
Then this linear gauge will have #494949 needle with 1px #494949 thickness
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
Then all linear gauge labels will have Black color
Then this linear gauge will have 50 range/ranges
Then linear gauge range1 will be colored in #009f00
Then linear gauge range25 will be colored in #e0fd6a
Then linear gauge range50 will be colored in #e9002c
# The tick analyzer separates major from minor ticks by stroke thickness (2 = major, 1 = minor), so when
# both share a thickness the count below is majors plus minors.
Then All 101 linear gauge minor ticks will have thickness of 1
Then All 101 linear gauge minor ticks will have Gray color
Then this linear gauge scale will have #E0DFDF background
