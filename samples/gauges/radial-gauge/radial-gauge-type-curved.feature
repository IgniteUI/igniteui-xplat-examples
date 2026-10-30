# Curved gauge: 0-220 speedometer (interval 20, value 120) on a 135°->45° scale with a #9F9FA0 'Needle' needle
# and CircleOverlay pivot, #494949 ticks with 4 minor ticks per interval, and 10 tapered colored ranges along
# the rim. The ranges have varying outer extents, which the radial range analyzer cannot read (see report).
# The radial gauge analyzer measures angles and extents against a square viewport; the sample sizes
# the gauge to fill a non-square slot, so pin it to a square before asserting geometry.
When this radial gauge is resized to 500x500
Then this radial gauge's needle visual will be rendered at an angle of 282.2727273 degrees
Then this radial gauge's needle visual will be #9F9FA0 in color
Then this radial gauge's needle visual will have a #9F9FA0 outline
Then this radial gauge's pivot visual will be #9F9FA0 in color
Then this radial gauge's pivot visual will have a #9F9FA0 outline
Then this radial gauge, with labels sorted by numeric value, will have labels reading:
  | labelValues |
  | 0 |
  | 20 |
  | 40 |
  | 60 |
  | 80 |
  | 100 |
  | 120 |
  | 140 |
  | 160 |
  | 180 |
  | 200 |
  | 220 |
Then this radial gauge will have all labels at 55 % distance from the center
Then this radial gauge will have labels with the font 'Verdana'
# CALIBRATE: font is '15px Verdana'; the exported label FontSize unit (px vs pt) on this platform is unverified.
Then this radial gauge will have abels will have font size 15
Then this radial gauge will have major tickmarks that are colored #494949 and have a thickness of 1
Then this radial gauge will have minor tickmarks that are colored #494949 and have a thickness of 1
Then this radial gauge will have 44 minor tickmarks
