//begin template
registerScript("WebTreeGridProductNameTemplate", (ctx) => {

    var value = ctx.cell.value;

    if (value == "Grandmas Boysenberry Spread" || value == "Mishi Kobe Niku" || value == "Carnarvon Tigers" || value == "Ikura") {
        return html`<span style="color: royalblue">${value}</span>`;
    }
    else {
        return html`<span>${value}</span>`;
    }
});
//end template