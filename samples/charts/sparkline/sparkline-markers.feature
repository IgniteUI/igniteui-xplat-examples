# Markers sample over SparklineProfitData (Label A..H, Value 30,40,50,40,30,20,30,40) with every marker
# kind visible (all, high, low, first, last, negative) and every marker size set to 10, on a value range
# pinned to minimum 0 / maximum 60.
Then this sparkline will have makers of size 10
When this sparklines horizontal axis visibility is Visible
And this sparklines vertical axis visibility is Visible
Then this sparkline will have a horizontal axis with first and last labels with values A,H
Then this sparkline will have a vertical axis with a top value of 60 and a bottom value of 0
