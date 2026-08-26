// Axis format-label callback: receives a data item and RETURNS the formatted label string (it does not
// mutate event args). On Blazor the chart invokes this in JS and consumes the return value, so it must be
// a registered JS script (there is no Blazor.cs handler for it). Ported from Web.ts (types stripped).
igRegisterScript("FormatDateLabelAsTime", (item) => {
    let d;

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
}, false);
