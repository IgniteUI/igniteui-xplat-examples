# Alluvial SankeySeries: a SankeyLayoutAdapter turns the SankeyOrderChannels tidy table into Region -> Product -> Channel
# layers, one node per distinct value (ids qualified by dimension index, e.g. 0:North) and each row's Orders summed into
# the links between consecutive columns. Node values are throughput; auto callouts label every node.
When we wait for chart animations to complete
When we are talking about the axis with name xAxis
Then this axis will have labels visible with these values: Region, Product, Channel
When we are talking about the series with name sankey
Then the rendered sankey node bands represent these values within 12 percent:
    | Label   | Value |
    | North   | 978   |
    | South   | 922   |
    | West    | 781   |
    | Laptops | 1025  |
    | Tablets | 599   |
    | Phones  | 1057  |
    | Online  | 1521  |
    | Retail  | 793   |
    | Partner | 367   |
Then the rendered sankey ribbons are valid and carry these flows within 12 percent:
    | Ribbon               | Value |
    | 0:North->1:Laptops   | 599   |
    | 0:North->1:Tablets   | 233   |
    | 0:North->1:Phones    | 146   |
    | 0:South->1:Laptops   | 129   |
    | 0:South->1:Tablets   | 274   |
    | 0:South->1:Phones    | 519   |
    | 0:West->1:Laptops    | 297   |
    | 0:West->1:Tablets    | 92    |
    | 0:West->1:Phones     | 392   |
    | 1:Laptops->2:Online  | 709   |
    | 1:Laptops->2:Retail  | 187   |
    | 1:Laptops->2:Partner | 129   |
    | 1:Tablets->2:Online  | 233   |
    | 1:Tablets->2:Retail  | 274   |
    | 1:Tablets->2:Partner | 92    |
    | 1:Phones->2:Online   | 579   |
    | 1:Phones->2:Retail   | 332   |
    | 1:Phones->2:Partner  | 146   |
# Duplicate (region, product) and (product, channel) pairs are aggregated into one ribbon each.
Then the rendered sankey ribbon 0:North->1:Laptops count is 1
Then the rendered sankey ribbon 1:Phones->2:Online count is 1
Then the rendered sankey node North is in the same layer as node West
Then the rendered sankey node West is left of node Laptops
Then the rendered sankey node Laptops is in the same layer as node Phones
Then the rendered sankey node Laptops is left of node Online
Then the rendered sankey node Online is in the same layer as node Partner
When we are talking about annotation layer nodeLabels targeting series sankey
Then this callout layer will have annotations with the following properties:
    | Label   |
    | North   |
    | South   |
    | West    |
    | Laptops |
    | Tablets |
    | Phones  |
    | Online  |
    | Retail  |
    | Partner |
Then the sankey node callouts are placed beside their nodes
