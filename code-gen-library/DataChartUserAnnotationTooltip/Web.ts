//begin imports
import { IgcUserAnnotationToolTipContentUpdatingEventArgs } from 'igniteui-webcomponents-charts';
//end imports

export class DataChartUserAnnotationTooltip {

    //begin eventHandler
    // The layer hands over the tooltip's content container each time it shows an annotation: the
    // annotation's details go in a line of text, made the first time and updated after that.
    public dataChartUserAnnotationTooltip(sender: any, args: IgcUserAnnotationToolTipContentUpdatingEventArgs): void {
        var tooltipText = args.annotationInfo.annotationData;
        if (args.content.children.length == 0) {
            var element = document.createElement("div");
            element.textContent = tooltipText;
            element.style.color = "white";
            args.content.appendChild(element);
        }
        else {
            var existing = args.content.children[0] as HTMLElement;
            existing.textContent = tooltipText;
        }
    }
    //end eventHandler
}
