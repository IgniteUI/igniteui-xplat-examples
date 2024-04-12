//begin imports
import { IgcPropertyEditorPropertyDescriptionChangedEventArgs, IgcPropertyEditorPropertyDescriptionComponent } from 'igniteui-webcomponents-layouts';
//end imports

export class WebRowIslandCellSelectionChange {
    //begin eventHandler
    public webRowIslandCellSelectionChange(sender: any, args: IgcPropertyEditorPropertyDescriptionChangedEventArgs): void {
        this.rowIsland.cellSelection = args.newValue.toLocaleLowerCase();
    }
    //end eventHandler
}