//begin imports
using System;
using System.Collections;
//end imports

export class FormatDateLabelAsDateAndTime
{
    //begin eventHandler
    public formatDateLabelAsDateAndTime( sender:any, item:any):string
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
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        const hours = String(d.getHours()).padStart(2, '0');
        const minutes = String(d.getMinutes()).padStart(2, '0');
        const seconds = String(d.getSeconds()).padStart(2, '0');

        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    }
    //end eventHandler
}