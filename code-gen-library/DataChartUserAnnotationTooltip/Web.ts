//begin imports
import { IgcUserAnnotationToolTipContentUpdatingEventArgs } from 'igniteui-webcomponents-charts';
//end imports

export class DataChartUserAnnotationTooltip {

    //begin eventHandler
    public dataChartUserAnnotationTooltip(sender: any, args: IgcUserAnnotationToolTipContentUpdatingEventArgs): void {
        // The layer hands over an empty container the first time it shows a given annotation, and
        // the same one after that, so the text is only put in once.
        if (args.content.children.length > 0) {
            return;
        }
        var line = document.createElement("div");
        line.textContent = args.annotationInfo.annotationData;
        line.style.color = "white";
        args.content.appendChild(line);
    }
    //end eventHandler
}
