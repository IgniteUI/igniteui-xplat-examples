# Comparative measures: a dodgerblue value bar at 50 (extents 0.5-0.65) against a limegreen target marker at
# 80 (1px limegreen outline, breadth 10, extents 0.3-0.85) on a 0-100 scale.
# The value bar is not asserted: its value is read against scaleStartExtent/scaleEndExtent, which the sample
# leaves unset and the client wrapper therefore does not know, and no step checks its color alone.
Then this bullet graph will has its target value set to 80
Then this target value will be colored in limegreen with limegreen outline that is 1 px thick
