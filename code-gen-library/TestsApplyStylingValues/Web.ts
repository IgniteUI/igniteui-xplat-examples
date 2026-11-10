//begin imports
//end imports

export class TestsApplyStylingValues
{

    //begin eventHandler
    public testsApplyStylingValues(){
        // Styles the content component the way an app would: through CSS custom properties on the element, which
        // the component reads as its styling. Runs with every update of the page, so a value the test restyles is
        // picked up by the next update.
        var target = CodeGenHelper.getDescription<any>("content");
        const raw = CodeGenHelper.findByName<any>("StylingValues");
        if (!target || !raw) {
            return;
        }
        let values: Record<string, any> = raw;
        if (typeof raw === "string") {
            values = JSON.parse(raw);
        } else if (raw.value !== undefined && typeof raw.value === "string") {
            values = JSON.parse(raw.value);
        }
        Object.keys(values).forEach((name) => {
            // NeedleBrush -> --needle-brush, XAxisLabelTextColor -> --x-axis-label-text-color
            const cssName = name
                .replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2")
                .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
                .toLowerCase();
            target.style.setProperty("--" + cssName, String(values[name]));
        });
        if (target.styleUpdated) {
            target.styleUpdated();
        }
    }
    //end eventHandler

}
