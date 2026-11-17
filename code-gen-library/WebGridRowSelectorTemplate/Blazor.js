//begin template
registerScript("WebGridRowSelectorTemplate", (ctx) => {
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
});
//end template