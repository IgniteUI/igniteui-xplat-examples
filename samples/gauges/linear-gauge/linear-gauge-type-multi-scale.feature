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
# Both range brushes are CSS linear-gradient(a, b), which runs top to bottom.
When we have a linear gradient named innerBand with these colors:
  | color | offset |
  | #FF0000 | 0 |
  | #C70101 | 1 |
And the linear gradient has a start point of (0.5, 0)
And the linear gradient has an end point of (0.5, 1)
When we have a linear gradient named outerBand with these colors:
  | color | offset |
  | #FA8F8F | 0 |
  | #FA5151 | 1 |
And the linear gradient has a start point of (0.5, 0)
And the linear gradient has an end point of (0.5, 1)
Then linear gauge range1 will be colored with linear gradient named innerBand
Then linear gauge range2 will be colored with linear gradient named outerBand
# The tick analyzer separates major from minor ticks by stroke thickness (2 = major, 1 = minor), so when
# both share a thickness the count below is majors plus minors.
Then All 71 linear gauge minor ticks will have thickness of 1
Then All 71 linear gauge minor ticks will have Gray color
Then this linear gauge scale will have #E0DFDF background
