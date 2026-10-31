# SankeySeries household budget showcase: SankeyHouseholdNodes pins 18 nodes to 4 layers (Budget, Split, Bucket, Detail)
# and SankeyHouseholdLinks carries the flows; the $ amount in each node label is the node's throughput, and auto callouts
# label every node beside its band.
When we wait for chart animations to complete
When we are talking about the series with name sankey
Then the rendered sankey node bands represent these values within 12 percent:
    | Label                 | Value |
    | Monthly Budget $6,200 | 6200  |
    | Needs $3,100          | 3100  |
    | Wants $1,240          | 1240  |
    | Savings $1,860        | 1860  |
    | Housing $1,800        | 1800  |
    | Living $1,300         | 1300  |
    | Lifestyle $1,240      | 1240  |
    | Investing $1,100      | 1100  |
    | Emergency Fund $760   | 760   |
    | Mortgage $1,500       | 1500  |
    | HOA $300              | 300   |
    | Groceries $650        | 650   |
    | Utilities $350        | 350   |
    | Transport $300        | 300   |
    | Dining $480           | 480   |
    | Travel $760           | 760   |
    | 401k $700             | 700   |
    | Roth IRA $400         | 400   |
Then the rendered sankey ribbons are valid and carry these flows within 12 percent:
    | Ribbon               | Value |
    | budget->needs        | 3100  |
    | budget->wants        | 1240  |
    | budget->savings      | 1860  |
    | needs->housing       | 1800  |
    | needs->living        | 1300  |
    | wants->lifestyle     | 1240  |
    | savings->investing   | 1100  |
    | savings->emergency   | 760   |
    | housing->mortgage    | 1500  |
    | housing->hoa         | 300   |
    | living->groceries    | 650   |
    | living->utilities    | 350   |
    | living->transport    | 300   |
    | lifestyle->dining    | 480   |
    | lifestyle->travel    | 760   |
    | investing->retire    | 700   |
    | investing->roth      | 400   |
Then the rendered sankey node Monthly Budget $6,200 is left of node Needs $3,100
Then the rendered sankey node Needs $3,100 is in the same layer as node Savings $1,860
Then the rendered sankey node Needs $3,100 is left of node Housing $1,800
Then the rendered sankey node Housing $1,800 is in the same layer as node Emergency Fund $760
Then the rendered sankey node Emergency Fund $760 is left of node Mortgage $1,500
Then the rendered sankey node Mortgage $1,500 is in the same layer as node Roth IRA $400
When we are talking about annotation layer nodeLabels targeting series sankey
Then this callout layer will have annotations with the following properties:
    | Label                 |
    | Monthly Budget $6,200 |
    | Needs $3,100          |
    | Wants $1,240          |
    | Savings $1,860        |
    | Housing $1,800        |
    | Living $1,300         |
    | Lifestyle $1,240      |
    | Investing $1,100      |
    | Emergency Fund $760   |
    | Mortgage $1,500       |
    | HOA $300              |
    | Groceries $650        |
    | Utilities $350        |
    | Transport $300        |
    | Dining $480           |
    | Travel $760           |
    | 401k $700             |
    | Roth IRA $400         |
Then the sankey node callouts are placed beside their nodes
