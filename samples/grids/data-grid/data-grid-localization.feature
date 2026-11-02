# Japanese-localized headers and group display names; grouped by Country (国) then Income (所得), so the first rows are two group headers.
# CALIBRATE: visible header prefix assumes the ~780px-wide GTK sampleSurface; star columns at their minimum widths overflow it, so the trailing column set depends on the real viewport.
Then this grid will have the header cells with the following text: 写真, 名前, 売上高, 給料, 年齢, 生年月日, 国旗
# CALIBRATE: assumes the summaryScope Root summary row is not exported as the first visible row.
Then the visible rows will be in this order: GroupHeader, GroupHeader, Item
# CALIBRATE: exact group-header text format; the first Country group in ascending order is Canada.
Then the visible rows at the following positions will have this text:
  | Position | Text      |
  | 1        | 国: Canada |
