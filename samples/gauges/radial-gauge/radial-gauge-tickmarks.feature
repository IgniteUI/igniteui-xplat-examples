# Tick marks: DodgerBlue major ticks (thickness 2, extents 0.5-0.57) every 10 from 0 to 80 and 4 DarkViolet
# minor ticks per interval (thickness 1, extents 0.52-0.57) on the default 135°->45° scale.
# The radial gauge analyzer measures angles and extents against a square viewport; the sample sizes
# the gauge to fill a non-square slot, so pin it to a square before asserting geometry.
When this radial gauge is resized to 500x500
Then this radial gauge will have major tickmarks positioned at (angle, startDistancePercent, endDistancePercent):
  | labelAngle | startDistancePercent | endDistancePercent |
  | 135 | 50 | 57 |
  | 168.75 | 50 | 57 |
  | 202.5 | 50 | 57 |
  | 236.25 | 50 | 57 |
  | 270 | 50 | 57 |
  | 303.75 | 50 | 57 |
  | 337.5 | 50 | 57 |
  | 11.25 | 50 | 57 |
  | 45 | 50 | 57 |
Then this radial gauge will have major tickmarks that are colored DodgerBlue and have a thickness of 2
Then this radial gauge will have 32 minor tickmarks
Then this radial gauge will have minor tickmarks positioned at (angle, startDistancePercent, endDistancePercent):
  | labelAngle | startDistancePercent | endDistancePercent |
  | 141.75 | 52 | 57 |
  | 148.5 | 52 | 57 |
  | 155.25 | 52 | 57 |
  | 162 | 52 | 57 |
  | 175.5 | 52 | 57 |
  | 182.25 | 52 | 57 |
  | 189 | 52 | 57 |
  | 195.75 | 52 | 57 |
  | 209.25 | 52 | 57 |
  | 216 | 52 | 57 |
  | 222.75 | 52 | 57 |
  | 229.5 | 52 | 57 |
  | 243 | 52 | 57 |
  | 249.75 | 52 | 57 |
  | 256.5 | 52 | 57 |
  | 263.25 | 52 | 57 |
  | 276.75 | 52 | 57 |
  | 283.5 | 52 | 57 |
  | 290.25 | 52 | 57 |
  | 297 | 52 | 57 |
  | 310.5 | 52 | 57 |
  | 317.25 | 52 | 57 |
  | 324 | 52 | 57 |
  | 330.75 | 52 | 57 |
  | 344.25 | 52 | 57 |
  | 351 | 52 | 57 |
  | 357.75 | 52 | 57 |
  | 4.5 | 52 | 57 |
  | 18 | 52 | 57 |
  | 24.75 | 52 | 57 |
  | 31.5 | 52 | 57 |
  | 38.25 | 52 | 57 |
Then this radial gauge will have minor tickmarks that are colored DarkViolet and have a thickness of 1
