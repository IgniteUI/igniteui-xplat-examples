//begin imports
import { IgrPropertyEditorPropertyDescriptionChangedEventArgs, IgrPropertyEditorPropertyDescriptionComponent } from 'igniteui-react-layouts';
//end imports

export class WebRowIslandCellSelectionChange {
    //begin eventHandler
    public webRowIslandCellSelectionChange(sender: any, args: IgrPropertyEditorPropertyDescriptionChangedEventArgs): void {
        this.hierarchicalGrid.contentChildLayoutList[0].cellSelection = args.newValue.toLocaleLowerCase();
    }
    //end eventHandler
}