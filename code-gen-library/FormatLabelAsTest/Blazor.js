// Axis format-label callback: RETURNS a constant label string (does not mutate event args). The chart
// invokes this in JS and uses the return value, so it must be a registered JS script. Ported from Web.ts.
igRegisterScript("FormatLabelAsTest", (item) => {
    return "TEST";
}, false);
