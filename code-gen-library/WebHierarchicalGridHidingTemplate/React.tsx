//begin imports
import { html } from "lit-html";
//end imports

export class WebHierarchicalGridHidingTemplate {
    //begin template
    //begin content
    public webHierarchicalGridHidingTemplate(): any {
        return html`<IgrGridToolbar>
            <IgrGridToolbarTitle>Column Hiding</IgrGridToolbarTitle>
            <IgrGridToolbarActions>
                <IgrGridToolbarHiding></IgrGridToolbarHiding>
            </IgrGridToolbarActions>
        </IgrGridToolbar>`;
    }
    //end content
    //end template
}