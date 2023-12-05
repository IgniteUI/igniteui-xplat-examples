//begin template
igRegisterScript("WebGridRowSelectorExcelTemplate", (ctx) => {
    var html = window.igTemplating.html;
    return html`<span style='display: block;width:30px;'> ${ctx.implicit.index}</span>`;
}, false);
//end template