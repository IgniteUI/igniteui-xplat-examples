# Dashboard tile given only MultipleStocks (two OHLC collections, Google then Amazon) infers a financial price chart
# and offers the candlestick/OHLC visualizations.
# CALIBRATE: MultipleStocks is a list of two titled OHLC collections; the tile is expected to plot one financial
# price series per collection on a DataChart (as for single OHLC data in DashboardTileVisualizationInference).
Then the dashboard tile will be displaying a DataChart
And this dashboard tile chart will have 2 visible series of FinancialPrice type
And the dashboard tile will offer the CandlestickChart visualization
And the dashboard tile will offer the OHLCChart visualization
# CALIBRATE: legend item titles are expected to come from TitledStockData.Title.
And the dashboard tile legend will have items titled: Google, Amazon
