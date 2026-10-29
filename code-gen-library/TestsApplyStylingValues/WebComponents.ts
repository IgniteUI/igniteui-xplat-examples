//begin imports
import { toSpinal } from 'igniteui-webcomponents-core';
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
            // The name the component reads the CSS custom property by: its property name, in spinal case.
            var cssName = "--" + toSpinal(propertyName.charAt(0).toLowerCase() + propertyName.substring(1));
            (target as HTMLElement).style.setProperty(cssName, values[propertyName]);
        }
        target.styleUpdated();
    }
    //end eventHandler

}
