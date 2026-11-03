// Axis format-label callback: RETURNS a currency-formatted label string (does not mutate event args).
// The chart invokes this in JS and uses the return value, so it must be a registered JS script. Ported
// from Web.ts; the Web.ts version cached the Intl.NumberFormat on an instance field
// (this._axisCurrencyFormat), which has no equivalent on a registered script, so it's hoisted to a
// module-level variable.
let chartAxisCurrencyFormat_formatter = null;

igRegisterScript("ChartAxisCurrencyFormat", (item) => {
    if (chartAxisCurrencyFormat_formatter == null) {
        chartAxisCurrencyFormat_formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        });
    }
    if (item == null) {
        return null;
    }
    return chartAxisCurrencyFormat_formatter.format(item);
}, false);
