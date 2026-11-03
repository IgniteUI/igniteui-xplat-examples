//begin imports
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-webcomponents-layouts';
import { IgcRadialGaugeComponent, IgcRadialGaugeRangeComponent, RadialGaugeNeedleShape, RadialGaugePivotShape, RadialGaugeBackingShape, RadialGaugeScaleOversweepShape } from 'igniteui-webcomponents-gauges';
import { SweepDirection } from 'igniteui-webcomponents-core';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class RadialGaugeAnimateToGauge4 {
    //begin eventHandler
    public radialGaugeAnimateToGauge4(sender: any, args: IgcPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        const gauge = CodeGenHelper.getDescription<IgcRadialGaugeComponent>("content");
        if (!gauge) return;

        gauge.transitionDuration = 1000;
        gauge.minimumValue = 0;
        gauge.maximumValue = 50;
        gauge.value = 25;
        gauge.interval = 5;

        gauge.labelInterval = 5;
        gauge.labelExtent = 0.71;
        gauge.font = "15px Verdana,Arial";

        gauge.isNeedleDraggingEnabled = true;
        gauge.needleEndExtent = 0.5;
        gauge.needleShape = RadialGaugeNeedleShape.Triangle;
        gauge.needleEndWidthRatio = 0.03;
        gauge.needleStartWidthRatio = 0.05;
        gauge.needlePivotShape = RadialGaugePivotShape.CircleOverlay;
        gauge.needlePivotWidthRatio = 0.15;
        gauge.needleBaseFeatureWidthRatio = 0.15;
        gauge.needleBrush = "#79797a";
        gauge.needleOutline = "#79797a";
        gauge.needlePivotBrush = "#79797a";
        gauge.needlePivotOutline = "#79797a";

        gauge.minorTickCount = 4;
        gauge.minorTickEndExtent = 0.625;
        gauge.minorTickStartExtent = 0.6;
        gauge.minorTickStrokeThickness = 1;
        gauge.minorTickBrush = "#79797a";
        gauge.tickStartExtent = 0.6;
        gauge.tickEndExtent = 0.65;
        gauge.tickStrokeThickness = 2;
        gauge.tickBrush = "#79797a";

        gauge.scaleStartAngle = 120;
        gauge.scaleEndAngle = 60;
        gauge.scaleBrush = "#d6d6d6";
        gauge.scaleOversweepShape = RadialGaugeScaleOversweepShape.Fitted;
        gauge.scaleSweepDirection = SweepDirection.Clockwise;
        gauge.scaleEndExtent = 0.57;
        gauge.scaleStartExtent = 0.5;

        gauge.backingBrush = "#fcfcfc";
        gauge.backingOutline = "#d6d6d6";
        gauge.backingStrokeThickness = 5;
        gauge.backingShape = RadialGaugeBackingShape.Circular;

        gauge.rangeBrushes  = ["#F86232", "#DC3F76", "#7446B9"];
        gauge.rangeOutlines = ["#F86232", "#DC3F76", "#7446B9"];
        gauge.ranges.clear();
        const r1 = new IgcRadialGaugeRangeComponent();
        r1.startValue = 5;  r1.endValue = 15; r1.innerStartExtent = 0.5; r1.innerEndExtent = 0.5; r1.outerStartExtent = 0.57; r1.outerEndExtent = 0.57;
        gauge.ranges.add(r1);
        const r2 = new IgcRadialGaugeRangeComponent();
        r2.startValue = 15; r2.endValue = 35; r2.innerStartExtent = 0.5; r2.innerEndExtent = 0.5; r2.outerStartExtent = 0.57; r2.outerEndExtent = 0.57;
        gauge.ranges.add(r2);
        const r3 = new IgcRadialGaugeRangeComponent();
        r3.startValue = 35; r3.endValue = 45; r3.innerStartExtent = 0.5; r3.innerEndExtent = 0.5; r3.outerStartExtent = 0.57; r3.outerEndExtent = 0.57;
        gauge.ranges.add(r3);
    }
    //end eventHandler
}
