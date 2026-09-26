// Axis format-label callback: receives a data item and RETURNS the formatted label string (does not
// mutate event args). The chart invokes this in JS and uses the return value, so it must be a registered
// JS script (no Blazor.cs handler exists). Ported from Web.ts (types stripped).
igRegisterScript("FormatDateLabelAsShortDate", (item) => {
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

    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const year = String(d.getFullYear()).slice(-2); // Get last two digits

    return `${month}/${day}/${year}`;
}, false);
