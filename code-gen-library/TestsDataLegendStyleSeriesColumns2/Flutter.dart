//begin imports
import 'package:igniteui_flutter_charts/src/igf-data-legend-styling-column-event-args.dart' show IgfDataLegendStylingColumnEventArgsState;
import 'package:igniteui_flutter_core/src/IgfBrush.dart' show IgfSolidColorBrush;
//end imports

class TestsDataLegendStyleSeriesColumns2
{
//begin eventHandler
    void testsDataLegendStyleSeriesColumns2(Object? sender, IgfDataLegendStylingColumnEventArgsState args) {
        switch (args.seriesTitle) {
            case "Financial1":
            case "F1":
                switch (args.valueMemberPath) {
                    case "Open":
                    case "[Open]":
                        args.labelText = "Open";
                        args.labelTextColor = IgfSolidColorBrush.fromString("cyan");
                        args.unitsText = "\$";
                        args.unitsTextColor = IgfSolidColorBrush.fromString("black");
                        args.valueTextColor = IgfSolidColorBrush.fromString("green");
                        break;
                    case "Close":
                    case "[Close]":
                        args.labelText = "Close";
                        args.labelTextColor = IgfSolidColorBrush.fromString("green");
                        args.unitsText = "\$";
                        args.unitsTextColor = IgfSolidColorBrush.fromString("red");
                        args.valueTextColor = IgfSolidColorBrush.fromString("cyan");
                        break;
                    case "TypicalPrice":
                    case "[TypicalPrice]":
                    case "TP":
                        args.labelText = "Typical";
                        args.labelTextColor = IgfSolidColorBrush.fromString("blue");
                        args.unitsText = "\$";
                        args.unitsTextColor = IgfSolidColorBrush.fromString("green");
                        args.valueTextColor = IgfSolidColorBrush.fromString("blue");
                        break;
                }
                break;
            case "Financial2":
            case "F2":
                switch (args.valueMemberPath) {
                    case "Open":
                    case "[Open]":
                        args.labelText = "Open";
                        args.labelTextColor = IgfSolidColorBrush.fromString("green");
                        args.unitsText = "\$";
                        args.unitsTextColor = IgfSolidColorBrush.fromString("brown");
                        args.valueTextColor = IgfSolidColorBrush.fromString("cyan");
                        break;
                    case "Close":
                    case "[Close]":
                        args.labelText = "Close";
                        args.labelTextColor = IgfSolidColorBrush.fromString("cyan");
                        args.unitsText = "\$";
                        args.unitsTextColor = IgfSolidColorBrush.fromString("red");
                        args.valueTextColor = IgfSolidColorBrush.fromString("green");
                        break;
                    case "TypicalPrice":
                    case "[TypicalPrice]":
                    case "TP":
                        args.labelText = "Typical";
                        args.labelTextColor = IgfSolidColorBrush.fromString("blue");
                        args.unitsText = "\$";
                        args.unitsTextColor = IgfSolidColorBrush.fromString("purple");
                        args.valueTextColor = IgfSolidColorBrush.fromString("orange");
                        break;
                }
                break;
        }
    }
//end eventHandler
}
