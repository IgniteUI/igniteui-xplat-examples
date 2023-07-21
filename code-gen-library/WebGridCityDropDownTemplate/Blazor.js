//begin template
igRegisterScript("WebGridCityDropDownTemplate", (ctx) => {
    var html = window.igTemplating.html;
    var id = ctx.cell.id.rowID;
    var comboId = "city_" + id;
    var progressId = "progress_city_" + id;
    return html`<div style="display:flex; flex-direction: column;"><igc-combo placeholder="Choose City..." disabled value-key="Name"  display-key="Name" id="${comboId}" single-select></igc-combo><igc-linear-progress style="display:none;" indeterminate id="${progressId}"></<igc-linear-progress></div>`;
}, false);
//end template