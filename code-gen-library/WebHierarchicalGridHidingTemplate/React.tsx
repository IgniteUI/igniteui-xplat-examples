//begin imports
import { html } from "/lit-html.js";
//end imports

export class WebHierarchicalGridHidingTemplate {
    //begin eventHandler
    public WebHierarchicalGridHidingTemplate(): void {
        return html`<IgrGridToolbar>
            <IgrGridToolbarTitle>Column Hiding</IgrGridToolbarTitle>
            <IgrGridToolbarActions>
                <IgrGridToolbarHiding></IgrGridToolbarHiding>
            </IgrGridToolbarActions>
        </IgrGridToolbar>`
        //end eventHandler
    }
}