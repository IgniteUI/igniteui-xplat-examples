//begin imports
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-webcomponents-layouts';
import { IgcBulletGraphComponent, IgcLinearGraphRangeComponent } from 'igniteui-webcomponents-gauges';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class BulletGraphAnimateToGauge1 {
    //begin eventHandler
    public bulletGraphAnimateToGauge1(sender: any, args: IgcPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        const gauge = CodeGenHelper.getDescription<IgcBulletGraphComponent>("content");
        if (!gauge) return;

        gauge.transitionDuration = 1000;
        gauge.minimumValue = 0;
        gauge.maximumValue = 80;
        gauge.value = 70;
        gauge.interval = 20;
        gauge.labelInterval = 10;
        gauge.labelExtent = 0.02;
        gauge.valueInnerExtent = 0.5;
        gauge.valueOuterExtent = 0.7;
        gauge.valueBrush = "#000000";
        gauge.targetValueBrush = "#000000";
        gauge.targetValueBreadth = 10;
        gauge.targetValue = 60;
        gauge.minorTickCount = 5;
        gauge.minorTickEndExtent = 0.10;
        gauge.minorTickStartExtent = 0.20;
        gauge.tickStartExtent = 0.20;
        gauge.tickEndExtent = 0.05;
        gauge.tickStrokeThickness = 2;
        gauge.scaleBackgroundBrush = "#dbdbdb";
        gauge.scaleBackgroundOutline = "gray";
        gauge.scaleStartExtent = 0.05;
        gauge.scaleEndExtent = 0.95;
        gauge.scaleBackgroundThickness = 0;
        gauge.backingBrush = "#f7f7f7";
        gauge.backingOutline = "#d1d1d1";
        gauge.backingStrokeThickness = 0;

        gauge.ranges.clear();
        const colors = ["#A4BD29", "#F86232"];
        for (let i = 0; i < colors.length; i++) {
            const r = new IgcLinearGraphRangeComponent();
            r.startValue = i * 40; r.endValue = i * 40 + 40;
            r.brush = colors[i]; r.outline = colors[i];
            r.innerStartExtent = 0.2; r.innerEndExtent = 0.2;
            r.outerStartExtent = 0.95; r.outerEndExtent = 0.95;
            gauge.ranges.add(r);
        }
    }
    //end eventHandler
}
