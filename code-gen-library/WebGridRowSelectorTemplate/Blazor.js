﻿//begin template
igRegisterScript("WebGridRowSelectorTemplate", (ctx) => {
    var html = window.igTemplating.html;
    if (ctx.implicit.selected) {
        return html`<div style="justify-content: space-evenly;display: flex;width: 70px;">
    <span> ${ctx.implicit.index}</span>
<igc-checkbox checked></igc-checkbox>
</div>`;
    } else {
        return html`<div style="justify-content: space-evenly;display: flex;width: 70px;">
    <span> ${ctx.implicit.index}</span>
<igc-checkbox></igc-checkbox>
</div>`;
    }
}, false);
//end template