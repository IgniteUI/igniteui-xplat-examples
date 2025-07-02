//begin imports

//end imports

export class FormatDateLabelAsDate
{
    //begin eventHandler
    //WPF: Infragistics.Controls.Charts.AxisFormatLabelEventHandler
    public formatDateLabelAsDate(item: any): string
    {

        let d: Date;

        if (item instanceof Date) {
            d = item;
        } else if (typeof item === 'object' && item !== null && 'Date' in item) {
            d = new Date(item['Date']);
        } else {
            if (typeof item === 'number') {
                if (item >= Number.MIN_SAFE_INTEGER && item <= Number.MAX_SAFE_INTEGER) {
                    d = new Date(item);
                } else {
                    return item.toString();
                }
            } else if (typeof item === 'object' && item !== null) {
                const dateProp = item.constructor?.prototype?.Date || item['Date'];
                d = new Date(dateProp);
            } else {
                throw new Error("Unsupported item type");
            }
        }

        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0'); // Months are 0-based
        const day = String(d.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;

    }
    //end eventHandler
}