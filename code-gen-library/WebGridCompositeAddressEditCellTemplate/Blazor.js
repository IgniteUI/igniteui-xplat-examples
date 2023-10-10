//begin template
igRegisterScript("WebGridCompositeAddressEditCellTemplate", (ctx) => {
    var html = window.igTemplating.html;
    window.keyUpHandler = function () {
        ctx.cell.row.data[window.event.target.id] = window.event.target.value;
    }

    return html`<div class="address-container--edit">
    <div>
        <span><strong>Country:</strong></span>
        <input id='Country' onkeyup='keyUpHandler()' value="${ctx.cell.row.data.Country}"></input>
        <br>
        <span><strong>City:</strong></span>
        <input id='City' onkeyup='keyUpHandler()' value="${ctx.cell.row.data.City}"></input>
    </div>
    <div>
        <span><strong>Postal Code:</strong></span>
        <input id='PostalCode' onkeyup='keyUpHandler()' value="${ctx.cell.row.data.PostalCode}"></input>
        <br>
        <span><strong>Selected:</strong></span>
        <input id='Phone' onkeyup='keyUpHandler()' value="${ctx.cell.row.data.Phone}"></input>
    </div>
    <br>
</div>`;
}, false);
//end template