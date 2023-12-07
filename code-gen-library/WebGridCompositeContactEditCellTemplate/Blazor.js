//begin template
igRegisterScript("WebGridCompositeContactEditCellTemplate", (ctx) => {
    var html = window.igTemplating.html;
    window.keyUpHandler = function () {
        ctx.cell.row.data[window.event.target.id] = window.event.target.value;
    }
    return html`<div class="contact-container--edit" style="padding: 1rem">         
                    <igc-input id="ContactName" label='Name' type="text" name="name" value="${ctx.cell.row.data.ContactName}" onkeyup='keyUpHandler()'></igc-input>
                    <igc-input id="ContactTitle" label='Title' type="text" name="name" value="${ctx.cell.row.data.ContactTitle}" onkeyup='keyUpHandler()'></igc-input>
                    <igc-input id="CompanyName" label='Company' type="text" name="name" value="${ctx.cell.row.data.CompanyName}" onkeyup='keyUpHandler()'></igc-input>
                </div>
   `;
}, false);
//end template