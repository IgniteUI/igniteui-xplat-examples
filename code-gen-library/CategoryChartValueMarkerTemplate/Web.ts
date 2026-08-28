//begin imports
import { DataTemplateMeasureInfo, DataTemplateRenderInfo } from 'igniteui-webcomponents-core';
//end imports

export class CategoryChartValueMarkerTemplate {
//begin template
//begin content
    // A marker template on the web is drawn rather than laid out: the chart asks how much room the
    // marker needs, then asks it to draw into a canvas at the point's position. So this is a measure
    // and a render, not markup -- the XAML side of this item is the DataTemplate that says the same
    // thing declaratively.
    public categoryChartValueMarkerTemplate = {
        measure: (measureInfo: DataTemplateMeasureInfo) => {
            const context = measureInfo.context;
            measureInfo.width = context.measureText("0.00").width;
            measureInfo.height = context.measureText("M").width + 12;
        },
        render: (renderInfo: DataTemplateRenderInfo) => {
            const ctx = renderInfo.context;
            const x = renderInfo.xPosition;
            const y = renderInfo.yPosition;

            // The hit test pass wants the marker's area, not its appearance.
            if (renderInfo.isHitTestRender) {
                ctx.fillStyle = renderInfo.data.actualItemBrush.fill;
                ctx.fillRect(x - (renderInfo.availableWidth / 2), y - renderInfo.availableHeight,
                             renderInfo.availableWidth, renderInfo.availableHeight);
                return;
            }

            const item = renderInfo.data.item;
            if (item == null) {
                return;
            }
            // Which column this marker belongs to, so the label reads that column's value.
            const path = renderInfo.data.series.valueColumn.propertyName;
            const value = item[path];

            ctx.font = "8pt Verdana";
            ctx.textBaseline = "top";
            ctx.fillStyle = "black";
            // A negative change sits below the point, a positive one above, so the label never
            // covers the column it belongs to.
            ctx.fillText(value + "%", x - 10, value < 0 ? y + 10 : y - 20);

            ctx.strokeStyle = "black";
            ctx.fillStyle = "white";
            ctx.beginPath();
            ctx.arc(x, y, 6, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.fill();
        }
    };
//end content
//end template
}
