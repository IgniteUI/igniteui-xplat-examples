# Ring gauge: full-circle scale (0°->360°) from 0 to 120 (labels every 10 at 0.85; 120 coincides with 0 and
# is omitted) with no needle; three concentric tracks, each a #E0DFDF 0-120 background ring under a
# progress ring: #10B401 to 90, #FDB417 to 80, #FF0000 to 60.
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
  | 100 |
  | 110 |
Then this radial gauge will have all labels at 85 % distance from the center
Then this radial gauge will have labels with the font 'Verdana'
# CALIBRATE: font is '15px Verdana'; the exported label FontSize unit (px vs pt) on this platform is unverified.
Then this radial gauge will have abels will have font size 15
Then this radial gauge will have major tickmarks that are colored #79797A and have a thickness of 1
# CALIBRATE: the minor ticks are transparent; confirm transparent ticks are still exported as visible.
Then this radial gauge will have 48 minor tickmarks
# CALIBRATE: every range starts at 0° so the analyzer's angle sort is a tie (assumes declaration order is
# kept), and the full-circle 0-120 ranges must export an arc the range analyzer can read.
Then the ranges along the radial gauge will have the following colors:
  | Color |
  | #E0DFDF |
  | #10B401 |
  | #E0DFDF |
  | #FDB417 |
  | #E0DFDF |
  | #FF0000 |
# CALIBRATE: needleShape None may export an empty needle path, which the needle analyzer does not expect.
Then this radial gauge's needle is not displayed
