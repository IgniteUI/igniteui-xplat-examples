//begin template
registerScript("WebGridProgressCellTemplate", (ctx) => {
    return html`<div style="width: 4rem">
    <igc-linear-progress value="${ctx.cell.value}"></igc-linear-progress>
 </div>`;
});
//end template