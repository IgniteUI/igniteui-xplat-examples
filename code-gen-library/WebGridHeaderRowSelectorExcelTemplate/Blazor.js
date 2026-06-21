//begin template
igRegisterScript("WebGridHeaderRowSelectorExcelTemplate", (ctx) => {
    var html = window.igTemplating.html;
    if (ctx.implicit.selectedCount > 0 && ctx.implicit.selectedCount === ctx.implicit.totalCount) {
        return html`<span style='width: 30px;display: flex;justify-content: center;'><i style='color: rgb(239, 184, 209);width: 18px;cursor: pointer;'>◢</i></span>`;
    } else {
        return html`<span style='width: 30px;display: flex;justify-content: center;'><i style='width: 18px;cursor: pointer;'>◢</i></span>`;
    }
}, false);
//end template