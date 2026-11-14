# VerticalPointSeries of FeatureSatisfactionScores: 2024 and 2025 average scores per feature as circle markers on an
# inverted category y axis, against a fixed 0-10 score axis.
When we wait for chart animations to complete
Then this legend will have items with text: 2024,2025
When we are talking about the axis with name yAxis
# The category y axis is inverted, so the features read top to bottom in data order.
Then this axis will have labels visible with these values: Search and filtering, Dashboard customization, Mobile app, Reporting and exports, Notifications, Integrations with other tools, Onboarding and help, Performance
When we are talking about the axis with name xAxis
Then this axis title will display text 'Average score'
Then this axis range will have a minimum value of 0 and a maximum value of 10
# Shapes are read in axis order, so the inverted category axis lists the data back to front.
When we are talking about the series with name VerticalPointSeries1
Then this series shapes will match the Year2024 column of sample data named FeatureSatisfactionScores within small tolerance in reverse order
Then this series will have markers with type Circle
When we are talking about the series with name VerticalPointSeries2
Then this series shapes will match the Year2025 column of sample data named FeatureSatisfactionScores within small tolerance in reverse order
Then this series will have markers with type Circle
