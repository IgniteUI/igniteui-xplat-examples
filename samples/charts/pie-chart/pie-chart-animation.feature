# Animation: PieChart over LocalData starts at radiusFactor 0.1 / startAngle 0; the 'Animate Chart' editor button grows radiusFactor
# and rotates startAngle until they hit their limits. No legend slot, so there is nothing else to assert.
# NOT COVERED: no existing step can assert this control. This sidecar deliberately has no Then line until the steps below are approved.
# Wanted: When the user clicks the Animate Chart button in the property editor
# Wanted: Then this pie chart will have slices with the following properties: | Label | Value |  (Cooling 37%..Other 18%; 37,25,12,8,18)
# Wanted: Then this pie chart will have a radius factor of <n>  (grows from 0.1 after the button click)
