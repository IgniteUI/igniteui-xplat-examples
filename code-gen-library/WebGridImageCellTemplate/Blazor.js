//begin template
registerScript("WebGridImageCellTemplate", (ctx) => {
    return html`<div>
    <img src="${ctx.cell.value}"
    style="border: 1px solid black;
    object-fit: fill;
    height: 2rem;
    width: 3rem;"/>
 </div>`;
});
//end template