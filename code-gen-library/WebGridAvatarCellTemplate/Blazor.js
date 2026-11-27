//begin template
registerScript("WebGridAvatarCellTemplate", (ctx) => {
    return html`<div>
    <igc-avatar shape="circle" src="${ctx.cell.value}">
    </igc-avatar>
</div>`;
});
//end template