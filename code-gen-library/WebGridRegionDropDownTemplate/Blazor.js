//begin template
igRegisterScript("WebGridRegionDropDownTemplate", (ctx) => {
    var html = window.igTemplating.html;
    var id = ctx.cell.id.rowID;
    var comboId = "region_" + id;
    var progressId = "progress_region_" + id;
    return html`<div style="display:flex; flex-direction: column;"><igc-combo placeholder="Choose Region..." disabled value-key="Region"  display-key="Region" id="${comboId}" single-select></igc-combo><igc-linear-progress style="display:none;" indeterminate id="${progressId}"></<igc-linear-progress><div>`;
}, false);
//end template