//begin imports
import { html } from "/lit-html.js";
//end imports

export class WebHierarchicalGridHidingTemplate {
    //begin eventHandler
    public WebHierarchicalGridHidingTemplate(): void {
        return html`<igc-grid-toolbar>
            <igc-grid-toolbar-actions>
                <igc-grid-toolbar-hiding title="Column Hiding"></igc-grid-toolbar-hiding>
            </igc-grid-toolbar-actions>
        </igc-grid-toolbar>`
        //end eventHandler
    }
}