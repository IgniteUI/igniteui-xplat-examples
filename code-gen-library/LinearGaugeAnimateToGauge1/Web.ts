//begin imports
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-webcomponents-layouts';
import { IgcLinearGaugeComponent, IgcLinearGraphRangeComponent, LinearGraphNeedleShape } from 'igniteui-webcomponents-gauges';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class LinearGaugeAnimateToGauge1 {
    //begin eventHandler
    public linearGaugeAnimateToGauge1(sender: any, args: IgcPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        const gauge = CodeGenHelper.getDescription<IgcLinearGaugeComponent>("content");
        if (!gauge) return;

        gauge.transitionDuration = 1000;
        gauge.minimumValue = 0;
        gauge.maximumValue = 80;
        gauge.value = 60;
        gauge.interval = 20;
        gauge.labelInterval = 20;
        gauge.labelExtent = 0.0;

        gauge.isNeedleDraggingEnabled = true;
        gauge.needleShape = LinearGraphNeedleShape.Trapezoid;
        gauge.needleBrush = "#79797a";
        gauge.needleOutline = "#ffffffff";
        gauge.needleStrokeThickness = 1;
        gauge.needleOuterExtent = 0.9;
        gauge.needleInnerExtent = 0.3;

        gauge.minorTickCount = 5;
        gauge.minorTickEndExtent = 0.10;
        gauge.minorTickStartExtent = 0.20;
        gauge.minorTickStrokeThickness = 1;
        gauge.tickStartExtent = 0.25;
        gauge.tickEndExtent = 0.05;
        gauge.tickStrokeThickness = 2;

        gauge.scaleStrokeThickness = 0;
        gauge.scaleBrush = "#ffffff";
        gauge.scaleOutline = "#dbdbdb";
        gauge.scaleInnerExtent = 0.075;
        gauge.scaleOuterExtent = 0.85;
        gauge.scaleStartExtent = 0.05;
        gauge.scaleEndExtent = 0.95;

        gauge.backingBrush = "#ffffff";
        gauge.backingOutline = "#d1d1d1";
        gauge.backingStrokeThickness = 0;

        gauge.ranges.clear();
        const r1 = new IgcLinearGraphRangeComponent();
        r1.startValue = 0;  r1.endValue = 40; r1.brush = "#A4BD29"; r1.outline = "#A4BD29"; r1.innerStartExtent = 0.075; r1.innerEndExtent = 0.075; r1.outerStartExtent = 0.65; r1.outerEndExtent = 0.65;
        gauge.ranges.add(r1);
        const r2 = new IgcLinearGraphRangeComponent();
        r2.startValue = 40; r2.endValue = 80; r2.brush = "#F86232"; r2.outline = "#F86232"; r2.innerStartExtent = 0.075; r2.innerEndExtent = 0.075; r2.outerStartExtent = 0.65; r2.outerEndExtent = 0.65;
        gauge.ranges.add(r2);
    }
    //end eventHandler
}
