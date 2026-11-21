# Quarter gauge: 180°->270° clockwise from 0 to 10, value 7.5, #79797A triangle needle with CircleOverlay
# pivot, labels every 5 at 0.935 and two ranges 0-5 (#A4BD29) and 5-10 (#F86232).
# The radial gauge analyzer measures angles and extents against a square viewport; the sample sizes
# the gauge to fill a non-square slot, so pin it to a square before asserting geometry.
When this radial gauge is resized to 500x500
Then this radial gauge's needle visual will be rendered at an angle of 247.5 degrees
Then this radial gauge's needle visual will be #79797A in color
Then this radial gauge's pivot visual will be #79797A in color
Then this radial gauge, with labels sorted by numeric value, will have labels reading:
  | labelValues |
  | 0 |
  | 5 |
  | 10 |
Then this radial gauge will have all labels at 93.5 % distance from the center
Then this radial gauge will have labels with the font 'Verdana'
# The font is '15px Verdana'; labels export their font size in pixels.
Then this radial gauge will have abels will have font size 15
Then the ranges along the radial gauge, sorted by angle, will have:
  | Start Angle | End Angle | Inner Start Percentage | Inner End Percentage | Outer Start Percentage | Outer End Percentage |
  | 180 | 225 | 30 | 30 | 90 | 90 |
  | 225 | 270 | 30 | 30 | 90 | 90 |
Then the ranges along the radial gauge will have the following colors:
  | Color |
  | #A4BD29 |
  | #F86232 |
