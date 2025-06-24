//begin imports
import { IgrPropertyEditorPropertyDescriptionChangedEventArgs, IgrPropertyEditorPropertyDescriptionComponent } from 'igniteui-react-layouts';
import { IgrRowIsland } from 'igniteui-react-grids';
//end imports

export class WebRowIslandCellSelectionChange {
    //begin eventHandler
    public webRowIslandCellSelectionChange(sender: any, args: IgrPropertyEditorPropertyDescriptionChangedEventArgs): void {
        const rowIsland = document.getElementsByTagName("igc-row-island")[0] as IgrRowIsland;
        rowIsland.cellSelection = args.newValue.toLocaleLowerCase();
    }
    //end eventHandler
}