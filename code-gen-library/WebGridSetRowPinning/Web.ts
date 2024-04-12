//begin imports
import { IgcPropertyEditorPropertyDescriptionChangedEventArgs, IgcPropertyEditorPropertyDescriptionComponent } from 'igniteui-webcomponents-layouts';
import { IgcGridComponent, RowPinningPosition } from 'igniteui-webcomponents-grids/grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebGridSetRowPinning {
    //begin eventHandler
    public webGridSetRowPinning(sender: any, args: IgcPropertyEditorPropertyDescriptionChangedEventArgs): void {
        var item = sender as IgcPropertyEditorPropertyDescriptionComponent;
        var newVal = item.primitiveValue;
        var grid = CodeGenHelper.getDescription<IgcGridComponent>("content");
        grid.pinning.rows = newVal === "Top" ? RowPinningPosition.Top : RowPinningPosition.Bottom;
    }
    //end eventHandler
}