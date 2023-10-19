//begin template
igRegisterScript("WebGridCompositeAddressEditCellTemplate", (ctx) => {
    var html = window.igTemplating.html;
    window.keyUpHandler = function () {
        ctx.cell.row.data[window.event.target.id] = window.event.target.value;
    }

    return html`
                <div class="contact-container--edit" style="padding: 1rem">         
                    <igc-input id="Country" label='Country' type="text" name="country" value="${ctx.cell.row.data.Country}" onkeyup='keyUpHandler()'></igc-input>
                    <igc-input id="City" label='City' type="text" name="city" value="${ctx.cell.row.data.City}" onkeyup='keyUpHandler()'></igc-input>
                    <igc-input id="PostalCode" label='PostalCode' type="text" name="postalcode" value="${ctx.cell.row.data.PostalCode}" onkeyup='keyUpHandler()'></igc-input>
                    <igc-input id="Phone" label='Phone' type="text" name="phone" value="${ctx.cell.row.data.Phone}" onkeyup='keyUpHandler()'></igc-input>
                </div>`;
}, false);
//end template