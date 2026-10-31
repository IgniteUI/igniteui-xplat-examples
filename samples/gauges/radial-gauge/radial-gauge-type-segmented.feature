# Segmented gauge: full-circle #E0DFDF scale (-90°->270°, extents 0.6-0.7) from 0 to 100 cut into segments
# by white ticks, with a #1E90FF 0-80 range as the progress fill and no needle; 100 coincides with 0 and is
# omitted. Major and minor ticks share the same extents, which the tick analyzer cannot separate (see report).
# The radial gauge analyzer measures angles and extents against a square viewport; the sample sizes
# the gauge to fill a non-square slot, so pin it to a square before asserting geometry.
When this radial gauge is resized to 500x500
Then this radial gauge, with labels sorted by numeric value, will have labels reading:
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
Then this radial gauge will have all labels at 80 % distance from the center
Then this radial gauge will have labels with the font 'Verdana'
# CALIBRATE: font is '15px Verdana'; the exported label FontSize unit (px vs pt) on this platform is unverified.
Then this radial gauge will have abels will have font size 15
Then this radial gauge's scale is colored #E0DFDF
Then the ranges along the radial gauge, sorted by angle, will have:
  | Start Angle | End Angle | Inner Start Percentage | Inner End Percentage | Outer Start Percentage | Outer End Percentage |
  | 270 | 198 | 60 | 60 | 70 | 70 |
Then the ranges along the radial gauge will have the following colors:
  | Color |
  | #1E90FF |
# CALIBRATE: needleShape None may export an empty needle path, which the needle analyzer does not expect.
Then this radial gauge's needle is not displayed
