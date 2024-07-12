//begin imports
import { IgrPropertyEditorPropertyDescriptionChangedEventArgs, IgrPropertyEditorPropertyDescriptionComponent } from 'igniteui-react-layouts';
import { IgrHierarchicalGrid } from 'igniteui-react-grids';
//end imports

export class WebRowIslandCellSelectionChange {
    //begin eventHandler
    public webRowIslandCellSelectionChange(sender: any, args: IgrPropertyEditorPropertyDescriptionChangedEventArgs): void {
        CodeGenHelper.getDescription<IgrHierarchicalGrid>("content").contentChildLayoutList[0].cellSelection = args.newValue.toLocaleLowerCase();
    }
    //end eventHandler
}