//begin template
igRegisterScript("WebGridChangePercentTemplate", (ctx) => {
    var html = window.igTemplating.html;
    if (ctx.cell.value > 0) {
        return html`<div>
        <span style="color:green;">${ctx.cell.value}%</span>
        </div>`;
    } else {
        return html`<div>
        <span style="color:red;">${ctx.cell.value}%</span>
        </div>`;
    }
}, false);
//end template