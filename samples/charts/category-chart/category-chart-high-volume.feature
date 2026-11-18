# High volume: a single line series over generated data, drawn without markers.
Then this category chart will have 1 visible series of Line type
When we are talking about the series at index 0
Then this series will have no markers
# The sample generates an inclusive endpoint (Count + 1 readings).
Then this series will have 500001 source items
# Changing the slider prepares the next batch; the button replaces the chart's source.
When we move the 'Data Points' slider in the property editor panel to 10000
When we click the 'Generate Data' row in the property editor panel
When we are talking about the series at index 0
Then this series will have 10001 source items
Then this series will have no markers
