//begin imports
import { IgrGridToolbar, IgrGridToolbarActions, IgrGridToolbarAdvancedFiltering, IgrGridToolbarHiding, IgrGridToolbarPinning, IgrGridToolbarExporter } from 'igniteui-react-grids';
//end imports

export class WebHierarchicalGridToolbarTemplate {
//begin template
//begin content
    public webHierarchicalGridToolbarTemplate = () => {
        return (
            <IgrGridToolbar>
                <IgrGridToolbarActions>
                    <IgrGridToolbarAdvancedFiltering></IgrGridToolbarAdvancedFiltering>
                    <IgrGridToolbarHiding></IgrGridToolbarHiding>
                    <IgrGridToolbarPinning></IgrGridToolbarPinning>
                    <IgrGridToolbarExporter></IgrGridToolbarExporter>
                </IgrGridToolbarActions>
            </IgrGridToolbar>
        );
    }
//end content
//end template
}
