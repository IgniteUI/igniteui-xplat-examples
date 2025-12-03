//begin imports
import { IgcPropertyEditorPropertyDescriptionChangedEventArgs, IgcPropertyEditorPropertyDescriptionComponent } from 'igniteui-webcomponents-layouts';
import { IgcRowIslandComponent } from 'igniteui-webcomponents-grids/grids';
//end imports

export class WebRowIslandCellSelectionChange {
    //begin eventHandler
    public webRowIslandCellSelectionChange(sender: any, args: IgcPropertyEditorPropertyDescriptionChangedEventArgs): void {
        var rowIsland = CodeGenHelper.findByName<IgcRowIslandComponent>("rowIsland");
        if (rowIsland)
            rowIsland.cellSelection = args.newValue.toLocaleLowerCase();
    }
    //end eventHandler
}