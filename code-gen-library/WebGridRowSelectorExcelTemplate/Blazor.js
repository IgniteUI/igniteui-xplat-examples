//begin template
igRegisterScript("WebGridRowSelectorExcelTemplate", (ctx) => {
    var html = window.igTemplating.html;
    return html`<span style='width:30px;display: flex;justify-content: center;'> ${ctx.implicit.index}</span>`;
}, false);
//end template