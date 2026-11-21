//begin imports
import 'package:igniteui_flutter_charts/src/igf-data-chart.dart' show IgfDataChartState;
import 'package:igniteui_flutter_charts/src/igf-stacked-fragment-series.dart' show IgfStackedFragmentSeriesState;
import 'package:igniteui_flutter_charts/src/igf-stacked-series-base.dart' show IgfStackedSeriesBaseState;
import 'package:igniteui_flutter_charts/src/igf-horizontal-stacked-series-base.dart' show IgfHorizontalStackedSeriesBaseState;
import 'package:igniteui_flutter_charts/src/igf-vertical-stacked-series-base.dart' show IgfVerticalStackedSeriesBaseState;
import 'package:igniteui_flutter_charts/src/igf-stacked-area-series.dart' show IgfStackedAreaSeriesState;
import 'package:igniteui_flutter_charts/src/igf-stacked-100-area-series.dart' show IgfStacked100AreaSeriesState;
import 'package:igniteui_flutter_charts/src/igf-stacked-bar-series.dart' show IgfStackedBarSeriesState;
import 'package:igniteui_flutter_charts/src/igf-stacked-100-bar-series.dart' show IgfStacked100BarSeriesState;
import 'package:igniteui_flutter_charts/src/igf-stacked-column-series.dart' show IgfStackedColumnSeriesState;
import 'package:igniteui_flutter_charts/src/igf-stacked-100-column-series.dart' show IgfStacked100ColumnSeriesState;
import 'package:igniteui_flutter_charts/src/igf-stacked-line-series.dart' show IgfStackedLineSeriesState;
import 'package:igniteui_flutter_charts/src/igf-stacked-100-line-series.dart' show IgfStacked100LineSeriesState;
import 'package:igniteui_flutter_charts/src/igf-stacked-spline-series.dart' show IgfStackedSplineSeriesState;
import 'package:igniteui_flutter_charts/src/igf-stacked-100-spline-series.dart' show IgfStacked100SplineSeriesState;
import 'package:igniteui_flutter_charts/src/igf-category-x-axis.dart' show IgfCategoryXAxisState;
import 'package:igniteui_flutter_charts/src/igf-category-y-axis.dart' show IgfCategoryYAxisState;
import 'package:igniteui_flutter_charts/src/igf-numeric-x-axis.dart' show IgfNumericXAxisState;
import 'package:igniteui_flutter_charts/src/igf-numeric-y-axis.dart' show IgfNumericYAxisState;
import 'package:igniteui_flutter_layouts/src/igf-property-editor-property-description-changed-event-args.dart' show IgfPropertyEditorPropertyDescriptionChangedEventArgsState;
import 'package:igniteui_flutter_library/libraryManager.dart' show CodeGenHelper;
//end imports

class EditorChangeStackedSeriesType {
    //begin eventHandler
    IgfStackedSeriesBaseState _make(String name) {
        switch (name) {
            case 'Stacked Column Series': return IgfStackedColumnSeriesState();
            case 'Stacked 100 Column Series': return IgfStacked100ColumnSeriesState();
            case 'Stacked Area Series': return IgfStackedAreaSeriesState();
            case 'Stacked 100 Area Series': return IgfStacked100AreaSeriesState();
            case 'Stacked Bar Series': return IgfStackedBarSeriesState();
            case 'Stacked 100 Bar Series': return IgfStacked100BarSeriesState();
            case 'Stacked Line Series': return IgfStackedLineSeriesState();
            case 'Stacked 100 Line Series': return IgfStacked100LineSeriesState();
            case 'Stacked Spline Series': return IgfStackedSplineSeriesState();
            case 'Stacked 100 Spline Series': return IgfStacked100SplineSeriesState();
        }
        throw ArgumentError.value(name, 'name', 'Unknown stacked series type');
    }

    void editorChangeStackedSeriesType(Object? sender, IgfPropertyEditorPropertyDescriptionChangedEventArgsState args) {
        final chart = CodeGenHelper.getDescription<IgfDataChartState>('content')!;
        final name = args.newValue!.toString();
        final stack = _make(name);
        stack.dataSource = chart.series![0]!.dataSource;

        if (name.contains('Bar')) {
            final vertical = stack as IgfVerticalStackedSeriesBaseState;
            vertical.xAxis = CodeGenHelper.findByName<IgfNumericXAxisState>('numXAxis');
            vertical.yAxis = CodeGenHelper.findByName<IgfCategoryYAxisState>('catYAxis');
        } else {
            final horizontal = stack as IgfHorizontalStackedSeriesBaseState;
            horizontal.xAxis = CodeGenHelper.findByName<IgfCategoryXAxisState>('catXAxis');
            horizontal.yAxis = CodeGenHelper.findByName<IgfNumericYAxisState>('numYAxis');
        }

        for (final fuel in ['Coal', 'Hydro', 'Nuclear', 'Gas', 'Oil']) {
            stack.series!.add(IgfStackedFragmentSeriesState()
                ..valueMemberPath = fuel
                ..title = fuel);
        }
        chart.series!.clear();
        chart.series!.add(stack);
    }
    //end eventHandler
}
