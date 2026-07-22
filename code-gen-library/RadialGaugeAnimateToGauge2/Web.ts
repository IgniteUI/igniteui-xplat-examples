//begin imports
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-webcomponents-layouts';
import { IgcRadialGaugeComponent, IgcRadialGaugeRangeComponent, RadialGaugeNeedleShape, RadialGaugePivotShape, RadialGaugeBackingShape } from 'igniteui-webcomponents-gauges';
import { SweepDirection } from 'igniteui-webcomponents-core';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class RadialGaugeAnimateToGauge2 {
    //begin eventHandler
    public radialGaugeAnimateToGauge2(sender: any, args: IgcPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        const gauge = CodeGenHelper.getDescription<IgcRadialGaugeComponent>("content");
        if (!gauge) return;

        gauge.transitionDuration = 1000;
        gauge.minimumValue = 100;
        gauge.maximumValue = 200;
        gauge.value = 125;

        gauge.scaleStartAngle = 180;
        gauge.scaleEndAngle = 0;
        gauge.scaleBrush = "transparent";
        gauge.scaleSweepDirection = SweepDirection.Clockwise;

        gauge.backingOutline = "white";
        gauge.backingBrush = "white";
        gauge.backingShape = RadialGaugeBackingShape.Fitted;

        gauge.needleEndExtent = 0.8;
        gauge.needleShape = RadialGaugeNeedleShape.Triangle;
        gauge.needlePivotShape = RadialGaugePivotShape.Circle;
        gauge.needlePivotWidthRatio = 0.1;
        gauge.needleBrush = "#79797a";
        gauge.needleOutline = "#79797a";

        gauge.tickBrush = "transparent";
        gauge.minorTickBrush = "transparent";

        gauge.labelInterval = 50;
        gauge.labelExtent = 0.935;
        gauge.font = "13px Verdana,Arial";

        gauge.rangeBrushes  = ["#32f845", "#bf32f8"];
        gauge.rangeOutlines = ["#32f845", "#bf32f8"];
        gauge.ranges.clear();
        const r1 = new IgcRadialGaugeRangeComponent();
        r1.startValue = 100; r1.endValue = 150; r1.innerStartExtent = 0.3; r1.innerEndExtent = 0.3; r1.outerStartExtent = 0.9; r1.outerEndExtent = 0.9;
        gauge.ranges.add(r1);
        const r2 = new IgcRadialGaugeRangeComponent();
        r2.startValue = 150; r2.endValue = 200; r2.innerStartExtent = 0.3; r2.innerEndExtent = 0.3; r2.outerStartExtent = 0.9; r2.outerEndExtent = 0.9;
        gauge.ranges.add(r2);
    }
    //end eventHandler
}
