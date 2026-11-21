# Half gauge: 180°->0° clockwise from 100 to 200, value 125, #79797A triangle needle with CircleOverlay pivot,
# labels every 20 at 0.935 and two (identical) 100-150 ranges colored #32F845 then #BF32F8.
# The radial gauge analyzer measures angles and extents against a square viewport; the sample sizes
# the gauge to fill a non-square slot, so pin it to a square before asserting geometry.
When this radial gauge is resized to 500x500
Then this radial gauge's needle visual will be rendered at an angle of 225 degrees
Then this radial gauge's needle visual will be #79797A in color
Then this radial gauge's pivot visual will be #79797A in color
Then this radial gauge, with labels sorted by numeric value, will have labels reading:
  | labelValues |
  | 100 |
  | 120 |
  | 140 |
  | 160 |
  | 180 |
  | 200 |
Then this radial gauge will have all labels at 93.5 % distance from the center
Then this radial gauge will have labels with the font 'Verdana'
# The font is '13px Verdana'; labels export their font size in pixels.
Then this radial gauge will have abels will have font size 13
Then the ranges along the radial gauge, sorted by angle, will have:
  | Start Angle | End Angle | Inner Start Percentage | Inner End Percentage | Outer Start Percentage | Outer End Percentage |
  | 180 | 270 | 30 | 30 | 87.5 | 87.5 |
  | 180 | 270 | 30 | 30 | 87.5 | 87.5 |
Then the ranges along the radial gauge will have the following colors:
  | Color |
  | #32F845 |
  | #BF32F8 |
