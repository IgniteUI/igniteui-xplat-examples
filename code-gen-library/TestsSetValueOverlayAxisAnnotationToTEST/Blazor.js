// Value-overlay axis-annotation label callback: RETURNS the annotation label string (does not mutate
// event args). The chart invokes this in JS and uses the return value, so it must be a registered JS
// script. Ported from Web.ts.
igRegisterScript("TestsSetValueOverlayAxisAnnotationToTEST", (sender, item) => {
    return "TEST";
}, false);
