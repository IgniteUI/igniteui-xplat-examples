# Multi-scale gauges: two stacked gauges sharing a -40 to 100 range (interval 10). The content gauge (gauge2,
# the last hydrated and so current) shows two gradient bands from -40 to 20 and Gray ticks (4 minor per
# interval) against the value 20.
Then this linear gauge's needle will be at 20
Then this linear gauge will have labels reading:
  | labelValues |
  | -40 |
  | -30 |
  | -20 |
  | -10 |
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
Then this linear gauge will have 2 range/ranges
Then linear gauge range1 will start from -40 and will end in 20
Then linear gauge range2 will start from -40 and will end in 20
# CALIBRATE: the brush is CSS linear-gradient(#FF0000, #C70101) (top to bottom); the comma form builds a left-to-right gradient.
Then linear gauge range1 will be colored with linear gradient named #FF0000,#C70101
# CALIBRATE: the brush is CSS linear-gradient(#FA8F8F, #FA5151) (top to bottom); the comma form builds a left-to-right gradient.
Then linear gauge range2 will be colored with linear gradient named #FA8F8F,#FA5151
# The tick analyzer separates major from minor ticks by stroke thickness (2 = major, 1 = minor), so when
# both share a thickness the count below is majors plus minors.
Then All 71 linear gauge minor ticks will have thickness of 1
Then All 71 linear gauge minor ticks will have Gray color
Then this linear gauge scale will have #E0DFDF background
