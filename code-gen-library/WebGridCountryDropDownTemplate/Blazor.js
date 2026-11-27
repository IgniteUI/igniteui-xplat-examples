//begin template
registerScript("WebGridCountryDropDownTemplate", (ctx) => {
    var id = ctx.cell.id.rowID;
    var comboId = "country_" + id;
    return html`<igc-combo placeholder="Choose Country..." value-key="Country" display-key="Country" id="${comboId}" single-select></igc-combo>`;
});
//end template