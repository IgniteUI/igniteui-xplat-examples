//begin template
igRegisterScript("WebHierarchicalGridArtistPhotoTemplate", (ctx) => {

    if (ctx.cell.value) {
        return html`<img src="${ctx.cell.value}"/>`;
    }
});
//end template