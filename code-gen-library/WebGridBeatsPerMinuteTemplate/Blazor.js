//begin template
igRegisterScript("WebGridBeatsPerMinuteTemplate", (ctx) => {
    var html = window.igTemplating.html;

    var value = ctx.cell.value;

    if (value > 95) {
        return html`<span style="color: red">${value}</span>`;
    }
    else {
        return html`<span style="color: green">${value}</span>`;
    }
}, false);
//end template