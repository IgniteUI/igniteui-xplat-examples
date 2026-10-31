# Column gauge: full 360° scale (0°->360°, #E0DFDF, extents 0.6-0.7) from 0 to 360 with labels every 30 at
# 0.85 and no needle or pivot. The 0 and 360 labels coincide, so the default OmitLast strategy drops 360.
# Major and minor ticks share the same extents, which the tick analyzer cannot separate (see report).
# The radial gauge analyzer measures angles and extents against a square viewport; the sample sizes
# the gauge to fill a non-square slot, so pin it to a square before asserting geometry.
When this radial gauge is resized to 500x500
Then this radial gauge, with labels sorted by numeric value, will have labels reading:
  | labelValues |
  | 0 |
  | 30 |
  | 60 |
  | 90 |
  | 120 |
  | 150 |
  | 180 |
  | 210 |
  | 240 |
  | 270 |
  | 300 |
  | 330 |
Then this radial gauge will have all labels at 85 % distance from the center
Then this radial gauge will have labels with the font 'Verdana'
# The font is '15px Verdana'; labels export their font size in pixels.
Then this radial gauge will have abels will have font size 15
Then this radial gauge's scale is colored #E0DFDF
# needleShape None: the gauge displays no needle.
Then this radial gauge's needle is not displayed
