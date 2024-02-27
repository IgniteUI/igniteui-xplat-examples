    //begin imports
import { IgcExporterOptionsBase, IgcGridToolbarExportEventArgs } from 'igniteui-webcomponents-grids/grids';
import { html } from 'lit-html';
//end imports

export class WebGridToolbarDefaultTemplate {
    //begin eventHandler
    public webGridToolbarDefaultTemplate(): void {
        return html`<igc-grid-toolbar-title>My new toolbar</igc-grid-toolbar-title>
        <igc-grid-toolbar-actions>
            <igc-grid-toolbar-advanced-filtering></igc-grid-toolbar-advanced-filtering>
            <igc-grid-toolbar-hiding></igc-grid-toolbar-hiding>
            <igc-grid-toolbar-pinning></igc-grid-toolbar-pinning>
            <igc-grid-toolbar-exporter>
                <span excelText>Export Excel</span>
                <span csvText>Export CSV</span>
            </igc-grid-toolbar-exporter>
            <igc-grid-toolbar-exporter></igc-grid-toolbar-exporter>
        </igc-grid-toolbar-actions>
    </igc-grid-toolbar>`
        //end eventHandler
    }
}