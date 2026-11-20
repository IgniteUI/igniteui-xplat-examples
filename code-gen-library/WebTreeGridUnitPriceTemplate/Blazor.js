//begin template
registerScript("WebTreeGridUnitPriceTemplate", (ctx) => {

    var value = ctx.cell.value;

    if (value <= 25) {
        return html`<span style="color: green">${value}</span>`;
    }
    else {
        return html`<span style="color: red">${value}</span>`;
    }
});
//end template