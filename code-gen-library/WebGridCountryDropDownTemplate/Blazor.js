//begin template
igRegisterScript("WebGridCountryDropDownTemplate", (ctx) => {
    var html = window.igTemplating.html;
    var id = ctx.cell.id.rowID;
    var comboId = "country_" + id;
    return html`<igc-combo placeholder="Choose Country..." value-key="Country" display-key="Country" id="${comboId}" single-select></igc-combo>`;
}, false);
//end template