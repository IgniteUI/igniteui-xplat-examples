//begin template
igRegisterScript("WebHierarchicalGridToolbarTemplate", () => {
    var html = window.igTemplating.html;
    return html`<igc-grid-toolbar>
        <igc-grid-toolbar-actions>
            <igc-grid-toolbar-advanced-filtering></igc-grid-toolbar-advanced-filtering>
            <igc-grid-toolbar-hiding></igc-grid-toolbar-hiding>
            <igc-grid-toolbar-pinning></igc-grid-toolbar-pinning>
            <igc-grid-toolbar-exporter></igc-grid-toolbar-exporter>
        </igc-grid-toolbar-actions>
    </igc-grid-toolbar>`
}, false);
//end template