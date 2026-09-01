//begin imports
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-webcomponents-layouts';
import { IgcLinearGaugeComponent, IgcLinearGraphRangeComponent, LinearGraphNeedleShape } from 'igniteui-webcomponents-gauges';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class LinearGaugeAnimateToGauge2 {
    //begin eventHandler
    public linearGaugeAnimateToGauge2(sender: any, args: IgcPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        const gauge = CodeGenHelper.getDescription<IgcLinearGaugeComponent>("content");
        if (!gauge) return;

        gauge.transitionDuration = 1000;
        gauge.minimumValue = 100;
        gauge.maximumValue = 200;
        gauge.value = 150;
        gauge.interval = 20;
        gauge.labelInterval = 20;
        gauge.labelExtent = 0.0;

        gauge.isNeedleDraggingEnabled = true;
        gauge.needleShape = LinearGraphNeedleShape.Triangle;
        gauge.needleBrush = "#79797a";
        gauge.needleOutline = "#ffffffff";
        gauge.needleStrokeThickness = 1;
        gauge.needleOuterExtent = 0.9;
        gauge.needleInnerExtent = 0.3;

        gauge.minorTickCount = 4;
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
        const colors = ["#0078C8", "#0099FF", "#21A7FF", "#45B9FF"];
        const starts = [100, 125, 150, 175];
        const ends   = [125, 150, 175, 200];
        for (let i = 0; i < colors.length; i++) {
            const r = new IgcLinearGraphRangeComponent();
            r.startValue = starts[i]; r.endValue = ends[i];
            r.brush = colors[i]; r.outline = colors[i];
            r.innerStartExtent = 0.075; r.innerEndExtent = 0.075;
            r.outerStartExtent = 0.65;  r.outerEndExtent = 0.65;
            gauge.ranges.add(r);
        }
    }
    //end eventHandler
}
