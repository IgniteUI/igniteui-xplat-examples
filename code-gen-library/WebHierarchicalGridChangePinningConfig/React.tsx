//begin imports
import { IgrPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-react-layouts';
import { RowPinningPosition } from 'igniteui-react-grids';
//end imports

export class WebHierarchicalGridChangePinningConfig {
    //begin eventHandler
    public webHierarchicalGridChangePinningConfig(sender: any, args: IgrPropertyEditorPropertyDescriptionChangedEventArgs): void {
        const rows = args.newValue === "Top" ? RowPinningPosition.Top : RowPinningPosition.Bottom;
        const columns = ColumnPinningPosition.End;
        this._pinningConfig1 = { rows, columns };
        this._pinningConfig2 = { rows, columns };
        if ('_pinningConfig3' in this) {
            this._pinningConfig3 = { rows, columns };
        }
        if ('_pinningConfig4' in this) {
            this._pinningConfig4 = { rows, columns };
        }
        this.forceUpdate(); // due to not using state
    }
    //end eventHandler
}