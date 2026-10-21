//begin imports
import { IgrPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-react-layouts';
import { ColumnPinningPosition, RowPinningPosition } from 'igniteui-react-grids';
//end imports

export class WebHierarchicalGridChangePinningConfig {
    //begin eventHandler
    public webHierarchicalGridChangePinningConfig(sender: any, args: IgrPropertyEditorPropertyDescriptionChangedEventArgs): void {
        const rows = args.newValue === "Top" ? RowPinningPosition.Top : RowPinningPosition.Bottom;
        const columns = ColumnPinningPosition.End;
        // Runs as a method of the sample component, which owns the pinning configs.
        const sample = this as any;
        sample._pinningConfig1 = { rows, columns };
        sample._pinningConfig2 = { rows, columns };
        if ('_pinningConfig3' in sample) {
            sample._pinningConfig3 = { rows, columns };
        }
        if ('_pinningConfig4' in sample) {
            sample._pinningConfig4 = { rows, columns };
        }
        sample.forceUpdate(); // due to not using state
    }
    //end eventHandler
}