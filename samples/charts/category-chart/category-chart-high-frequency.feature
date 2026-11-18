# High frequency: a single line series fed live by a timer, drawn without markers.
Then this category chart will have 1 visible series of Line type
When we are talking about the series at index 0
Then this series will have no markers
# The buffer holds the selected point count plus its inclusive endpoint.
Then this series will have 100001 source items
When we move the 'Data Points' slider in the property editor panel to 10000
When we click the 'Generate Data' row in the property editor panel
When we are talking about the series at index 0
Then this series will have 10001 source items
Then this series will have no markers
