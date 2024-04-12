//begin template
igRegisterScript("WebHierarchicalGridHidingTemplate", (ctx) => {
    var html = window.igTemplating.html;
    return html`<IgbGridToolbar>
    <IgbGridToolbarTitle>Column Hiding</IgbGridToolbarTitle>
    <IgbGridToolbarActions>
        <IgbGridToolbarHiding></IgbGridToolbarHiding>
    </IgbGridToolbarActions>
</IgbGridToolbar>`;
}, false);
//end template