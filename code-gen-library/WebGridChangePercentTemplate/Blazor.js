//begin template
registerScript("WebGridChangePercentTemplate", (ctx) => {
    if (ctx.cell.value > 0) {
        return html`<div>
        <span style="color:green;">${ctx.cell.value}%</span>
        </div>`;
    } else {
        return html`<div>
        <span style="color:red;">${ctx.cell.value}%</span>
        </div>`;
    }
});
//end template