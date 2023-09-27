//begin template
igRegisterScript("WebGridTextColorTemplate", (ctx) => {
    var html = window.igTemplating.html;

    return html`<span style="color: red">${ctx.cell.value}</span>`;
}, false);
//end template