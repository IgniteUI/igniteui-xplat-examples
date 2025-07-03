//begin imports

//end imports

export class FormatDateLabelAsTime
{
    //begin eventHandler
    public formatDateLabelAsTime(item: any): string
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

        return d.toTimeString().split(' ')[0]; // "HH:mm:ss"
    }
    //end eventHandler
}