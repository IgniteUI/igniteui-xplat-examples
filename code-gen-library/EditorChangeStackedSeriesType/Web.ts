//begin imports
import { IgcPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-webcomponents-layouts';
import { IgcDataChartComponent, IgcStackedFragmentSeriesComponent, IgcStackedSeriesBaseComponent, IgcHorizontalStackedSeriesBaseComponent, IgcVerticalStackedSeriesBaseComponent, IgcStackedAreaSeriesComponent, IgcStacked100AreaSeriesComponent, IgcStackedBarSeriesComponent, IgcStacked100BarSeriesComponent, IgcStackedColumnSeriesComponent, IgcStacked100ColumnSeriesComponent, IgcStackedLineSeriesComponent, IgcStacked100LineSeriesComponent, IgcStackedSplineSeriesComponent, IgcStacked100SplineSeriesComponent, IgcCategoryXAxisComponent, IgcCategoryYAxisComponent, IgcNumericXAxisComponent, IgcNumericYAxisComponent } from 'igniteui-webcomponents-charts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class EditorChangeStackedSeriesType {

    //begin eventHandler
    // Every stacked type carries the same five fragments, one per fuel, so they are built once and
    // handed to whichever stack the reader picks.
    private fragments(): IgcStackedFragmentSeriesComponent[] {
        var made: IgcStackedFragmentSeriesComponent[] = [];
        var fuels = ["Coal", "Hydro", "Nuclear", "Gas", "Oil"];
        for (var i = 0; i < fuels.length; i++) {
            var fragment = new IgcStackedFragmentSeriesComponent();
            fragment.valueMemberPath = fuels[i];
            fragment.title = fuels[i];
            made.push(fragment);
        }
        return made;
    }

    private make(name: string): IgcStackedSeriesBaseComponent {
        switch (name) {
            case "Stacked Area Series": return new IgcStackedAreaSeriesComponent();
            case "Stacked 100 Area Series": return new IgcStacked100AreaSeriesComponent();
            case "Stacked Bar Series": return new IgcStackedBarSeriesComponent();
            case "Stacked 100 Bar Series": return new IgcStacked100BarSeriesComponent();
            case "Stacked 100 Column Series": return new IgcStacked100ColumnSeriesComponent();
            case "Stacked Line Series": return new IgcStackedLineSeriesComponent();
            case "Stacked 100 Line Series": return new IgcStacked100LineSeriesComponent();
            case "Stacked Spline Series": return new IgcStackedSplineSeriesComponent();
            case "Stacked 100 Spline Series": return new IgcStacked100SplineSeriesComponent();
        }
        return new IgcStackedColumnSeriesComponent();
    }

    public editorChangeStackedSeriesType(sender: any, args: IgcPropertyEditorPropertyDescriptionChangedEventArgs): void {
        var chart = CodeGenHelper.getDescription<IgcDataChartComponent>("content");
        var name = args.newValue.toString();

        // A bar stack grows along the other axis, so it reads the category down the side and the
        // numbers across the bottom; every other type is the other way round. Both pairs of axes
        // are declared on the chart, and the swap is which pair this stack is given.
        var bar = name.indexOf("Bar") >= 0;
        var stack = this.make(name);
        // Which axis is the category one is what separates the two stacked bases, so each is reached
        // through the base that declares the pair it has rather than through the one they share.
        if (bar) {
            var vertical = stack as IgcVerticalStackedSeriesBaseComponent;
            vertical.xAxis = CodeGenHelper.findByName<IgcNumericXAxisComponent>("numXAxis");
            vertical.yAxis = CodeGenHelper.findByName<IgcCategoryYAxisComponent>("catYAxis");
        } else {
            var horizontal = stack as IgcHorizontalStackedSeriesBaseComponent;
            horizontal.xAxis = CodeGenHelper.findByName<IgcCategoryXAxisComponent>("catXAxis");
            horizontal.yAxis = CodeGenHelper.findByName<IgcNumericYAxisComponent>("numYAxis");
        }

        var made = this.fragments();
        for (var i = 0; i < made.length; i++) {
            stack.series.add(made[i]);
        }

        chart.series.clear();
        chart.series.add(stack);
    }
    //end eventHandler
}
