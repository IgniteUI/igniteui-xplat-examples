# Animation: the initial 'full' radial gauge (0-50, interval 5, value 25, scale 120°->60° clockwise,
# circular #FCFCFC backing) that the editor buttons animate into other gauge styles (transitionDuration
# 1000). Ranges 5-15/15-35/35-45 take the rangeBrushes #F86232/#DC3F76/#7446B9 in order.
# The radial gauge analyzer measures angles and extents against a square viewport; the sample sizes
# the gauge to fill a non-square slot, so pin it to a square before asserting geometry.
When this radial gauge is resized to 500x500
Then this radial gauge's needle visual will be rendered at an angle of 270 degrees
Then this radial gauge's needle visual will be #79797A in color
Then this radial gauge's needle visual will have a #79797A outline
Then this radial gauge's pivot visual will be #79797A in color
Then this radial gauge's pivot visual will have a #79797A outline
Then this radial gauge's scale is colored #D6D6D6
Then this radial gauge's backing shape will be #FCFCFC with a #D6D6D6 outline that is 5 pixels thick
Then this radial gauge, with labels sorted by numeric value, will have labels reading:
  | labelValues |
  | 0 |
  | 5 |
  | 10 |
  | 15 |
  | 20 |
  | 25 |
  | 30 |
  | 35 |
  | 40 |
  | 45 |
  | 50 |
Then this radial gauge will have all labels at 71 % distance from the center
Then this radial gauge will have labels with the font 'Verdana'
# CALIBRATE: font is '15px Verdana'; the exported label FontSize unit (px vs pt) on this platform is unverified.
Then this radial gauge will have abels will have font size 15
Then this radial gauge will have major tickmarks that are colored #79797A and have a thickness of 2
Then this radial gauge will have minor tickmarks that are colored #79797A and have a thickness of 1
Then this radial gauge will have 40 minor tickmarks
Then the ranges along the radial gauge, sorted by angle, will have:
  | Start Angle | End Angle | Inner Start Percentage | Inner End Percentage | Outer Start Percentage | Outer End Percentage |
  | 150 | 210 | 50 | 50 | 57 | 57 |
  | 210 | 330 | 50 | 50 | 57 | 57 |
  | 330 | 30 | 50 | 50 | 57 | 57 |
Then the ranges along the radial gauge will have the following colors:
  | Color |
  | #F86232 |
  | #DC3F76 |
  | #7446B9 |
