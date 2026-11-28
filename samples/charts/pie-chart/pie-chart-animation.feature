# Documentation: components/charts/types/pie-chart.mdx — radius and start angle.
# The sample grows the pie to full radius while rotating through one turn; its button restarts it.
Then this pie chart will finish growing and rotating within 12 seconds
When we disable waiting for animation idle
And we click the 'Animate Chart' row in the property editor panel
Then this pie chart will have radius factor between 0.1 and 0.5
And this pie chart will finish growing and rotating within 12 seconds
When we enable waiting for animation idle
