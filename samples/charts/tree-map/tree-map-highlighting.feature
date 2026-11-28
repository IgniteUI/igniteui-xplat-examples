# Documentation: components/charts/types/treemap-chart.mdx — hover highlighting.
Then this treemap will have rendered nodes with labels: China, India
When we remember the rendered fill of treemap node 'China'
And we hover over treemap node 'China'
Then treemap node 'China' will have a different rendered fill
When we choose 'FadeOthers' from the 'Highlighting Mode: ' row in the property editor panel
And we hover over treemap node 'India'
Then treemap node 'China' will have rendered opacity below 0.6
