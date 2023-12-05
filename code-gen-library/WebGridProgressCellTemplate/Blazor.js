//begin template
igRegisterScript("WebGridProgressCellTemplate", (ctx) => {
    var html = window.igTemplating.html;
    return html`<div style="width: 4rem">
    <igc-linear-progress value="${ctx.cell.value}"></igc-linear-progress>
 </div>`;
}, false);
//end template