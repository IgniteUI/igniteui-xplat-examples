//begin imports
//end imports

export class TestsApplyStylingValues
{

    //begin eventHandler
    // Styles the component the way an app's stylesheet would: each value becomes a CSS custom property on the
    // component's own element, so it goes away with the element. The component is then told the styles in effect
    // changed, so it takes them even when it was already styled.
    public testsApplyStylingValues(){
        var target = CodeGenHelper.getDescription<any>("content");
        var jVal = CodeGenHelper.findByName<any>("StylingValues");
        var values = JSON.parse(jVal.value) as Record<string, string>;
        for (const propertyName of Object.keys(values)) {
            var cssName = "--" + propertyName.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
            (target as HTMLElement).style.setProperty(cssName, values[propertyName]);
        }
        target.styleUpdated();
    }
    //end eventHandler

}
