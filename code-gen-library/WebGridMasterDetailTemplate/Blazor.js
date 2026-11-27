//begin template
registerScript("WebGridMasterDetailTemplate", (ctx) => {
    var data = ctx.implicit;
    return html` <div class="contact-container">
        <span><strong>Name:</strong> ${data.ContactName}</span>
        <br />
        <span><strong>Title:</strong> ${data.ContactTitle}</span>
        <br />
        <span><strong>Company:</strong> ${data.Company}</span>
        <br />
    </div>`;
});
//end template