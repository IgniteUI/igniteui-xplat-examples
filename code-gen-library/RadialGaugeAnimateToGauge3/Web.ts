//begin imports
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-webcomponents-layouts';
import { IgcRadialGaugeComponent, RadialGaugeNeedleShape, RadialGaugePivotShape, RadialGaugeBackingShape, RadialGaugeScaleOversweepShape } from 'igniteui-webcomponents-gauges';
import { SweepDirection } from 'igniteui-webcomponents-core';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class RadialGaugeAnimateToGauge3 {
    //begin eventHandler
    public radialGaugeAnimateToGauge3(sender: any, args: IgcPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        const gauge = CodeGenHelper.getDescription<IgcRadialGaugeComponent>("content");
        if (!gauge) return;

        gauge.transitionDuration = 1000;
        gauge.minimumValue = 0;
        gauge.maximumValue = 80;
        gauge.value = 10;
        gauge.interval = 10;

        gauge.labelExtent = 0.6;
        gauge.labelInterval = 10;
        gauge.font = "15px Verdana,Arial";

        gauge.scaleStartAngle = 135;
        gauge.scaleEndAngle = 45;
        gauge.scaleBrush = "#0b8fed";
        gauge.scaleOversweepShape = RadialGaugeScaleOversweepShape.Auto;
        gauge.scaleSweepDirection = SweepDirection.Clockwise;
        gauge.scaleEndExtent = 0.825;
        gauge.scaleStartExtent = 0.775;

        gauge.minorTickStartExtent = 0.7;
        gauge.minorTickEndExtent = 0.75;
        gauge.tickStartExtent = 0.675;
        gauge.tickEndExtent = 0.75;

        gauge.backingShape = RadialGaugeBackingShape.Fitted;
        gauge.backingBrush = "#fcfcfc";
        gauge.backingOutline = "#d6d6d6";
        gauge.backingOversweep = 5;
        gauge.backingCornerRadius = 10;
        gauge.backingOuterExtent = 0.9;

        gauge.needleShape = RadialGaugeNeedleShape.NeedleWithBulb;
        gauge.needlePivotShape = RadialGaugePivotShape.CircleOverlay;
        gauge.needleEndExtent = 0.5;
        gauge.needlePointFeatureExtent = 0.3;
        gauge.needlePivotWidthRatio = 0.2;
        gauge.needleBrush = "#9f9fa0";
        gauge.needleOutline = "#9f9fa0";
        gauge.needlePivotBrush = "#9f9fa0";
        gauge.needlePivotOutline = "#9f9fa0";

        gauge.tickBrush = "rgba(51, 51, 51, 1)";
        gauge.minorTickBrush = "rgba(73, 73, 73, 1)";
        gauge.minorTickCount = 6;

        gauge.ranges.clear();
    }
    //end eventHandler
}
