//begin template
igRegisterScript("WebGridCompositeContactEditCellTemplate", (ctx) => {
    var html = window.igTemplating.html;
    window.keyUpHandler = function () {
        ctx.cell.row.data[window.event.target.id] = window.event.target.value;
    }
    return html`<div class="contact-container--edit">
    <div style="display:flex; margin-top:3px">
        <div>
            <strong>Name:</strong>
            <input id='ContactName' onkeyup='keyUpHandler()' value="${ctx.cell.row.data.ContactName}"></input>
        </div>
        <div style="margin-left: 10px">
            <strong>Title:</strong>
            <input id='ContactTitle' onkeyup='keyUpHandler()' value='${ctx.cell.row.data.ContactTitle}'></input>
        </div>
    </div>
    <div style="margin-top: 10px">
        <strong>Company:</strong>
        <input id='CompanyName' onkeyup='keyUpHandler()' value='${ctx.cell.row.data.CompanyName}'></input>
    </div>
</div>`;
}, false);
//end template