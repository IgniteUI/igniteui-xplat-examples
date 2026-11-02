# Display-type picker; the initial state is a Line sparkline over the generated SparklineWaveData
# (angle 0..1435 step 5, value sin(a) + sin(3a)/3) with the value range pinned to minimum -1 / maximum 1.
# Revealing the axes shows the pinned range and the first/last Angle labels.
Then this sparkline will not display any markers
When this sparklines horizontal axis visibility is Visible
And this sparklines vertical axis visibility is Visible
Then this sparkline will have a horizontal axis with first and last labels with values 0,1435
Then this sparkline will have a vertical axis with a top value of 1 and a bottom value of -1
