//begin template
igRegisterScript("WebGridCompositeContactCellTemplate", (ctx) => {
    var html = window.igTemplating.html;
    return html` <div class="contact-container">
    <span><strong>Name:</strong> ${ctx.cell.row.data.ContactName}</span>
    <br />
    <span><strong>Title:</strong> ${ctx.cell.row.data.ContactTitle}</span>
    <br />
    <span><strong>Company:</strong> ${ctx.cell.row.data.CompanyName}</span>
    <br />
</div>`;
}, false);
//end template