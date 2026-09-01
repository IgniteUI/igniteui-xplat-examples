//begin imports
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-webcomponents-layouts';
import { IgcRadialGaugeComponent, IgcRadialGaugeRangeComponent, RadialGaugeNeedleShape, RadialGaugePivotShape, RadialGaugeBackingShape } from 'igniteui-webcomponents-gauges';
import { SweepDirection } from 'igniteui-webcomponents-core';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class RadialGaugeAnimateToGauge1 {
    //begin eventHandler
    public radialGaugeAnimateToGauge1(sender: any, args: IgcPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        const gauge = CodeGenHelper.getDescription<IgcRadialGaugeComponent>("content");
        if (!gauge) return;

        gauge.transitionDuration = 1000;
        gauge.minimumValue = 0;
        gauge.maximumValue = 10;
        gauge.value = 7.5;

        gauge.scaleStartAngle = 180;
        gauge.scaleEndAngle = 270;
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

        gauge.labelInterval = 5;
        gauge.labelExtent = 0.915;
        gauge.font = "15px Verdana,Arial";

        gauge.rangeBrushes  = ["#a4bd29", "#F86232"];
        gauge.rangeOutlines = ["#a4bd29", "#F86232"];
        gauge.ranges.clear();
        const r1 = new IgcRadialGaugeRangeComponent();
        r1.startValue = 0;  r1.endValue = 5;  r1.innerStartExtent = 0.3; r1.innerEndExtent = 0.3; r1.outerStartExtent = 0.9; r1.outerEndExtent = 0.9;
        gauge.ranges.add(r1);
        const r2 = new IgcRadialGaugeRangeComponent();
        r2.startValue = 5; r2.endValue = 10; r2.innerStartExtent = 0.3; r2.innerEndExtent = 0.3; r2.outerStartExtent = 0.9; r2.outerEndExtent = 0.9;
        gauge.ranges.add(r2);
    }
    //end eventHandler
}
