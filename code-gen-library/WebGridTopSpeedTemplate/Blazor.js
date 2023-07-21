//begin template
igRegisterScript("WebGridTopSpeedTemplate", (ctx) => {
    var html = window.igTemplating.html;

    var value = ctx.cell.value;

    if (value < 5) {
        return html`<span style="color: royalblue">${value}</span>`;
    }
    else {
        return html`<span>${value}</span>`;
    }
}, false);
//end template