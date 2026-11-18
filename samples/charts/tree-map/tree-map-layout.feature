# Documentation: components/charts/types/treemap-chart.mdx — layout types and orientation.
Then this treemap will have rendered nodes with labels: Asia, China, India
When we remember the rendered rectangle of treemap node 'China'
And we choose 'SliceAndDice' from the 'Layout' row in the property editor panel
Then treemap node 'China' will have a different rendered rectangle
And treemap node 'China' will be contained in node 'Asia'
And the area of treemap node 'India' relative to 'China' will be 0.92363980 within 0.03
When we remember the rendered rectangle of treemap node 'China'
And we choose 'Horizontal' from the 'Orientation' row in the property editor panel
Then treemap node 'China' will have a different rendered rectangle
And treemap node 'India' will be contained in node 'Asia'
