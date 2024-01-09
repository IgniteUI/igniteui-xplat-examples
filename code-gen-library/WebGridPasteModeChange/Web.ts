//begin imports
import { IgcPropertyEditorPropertyDescriptionChangedEventArgs, IgcPropertyEditorPropertyDescriptionComponent } from 'igniteui-webcomponents-layouts';
//end imports

export class WebGridPasteModeChange {
    //begin eventHandler
    public webGridPasteModeChange(sender: any, args: IgcPropertyEditorPropertyDescriptionChangedEventArgs): void {
        var item = sender as IgcPropertyEditorPropertyDescriptionComponent;        
        var newVal = item.primitiveValue;
        this["pasteMode"] = newVal === "NewRecords" ? "Paste data as new records" : "Paste starting from active cell";
    }
    //end eventHandler
}