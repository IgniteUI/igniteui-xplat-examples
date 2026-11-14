// The layer hands over the tooltip's content container each time it shows an annotation: the
// annotation's details go in a line of text, made the first time and updated after that.
igRegisterScript("DataChartUserAnnotationTooltip", (sender, args) => {
    var tooltipText = args.annotationInfo.annotationData;
    if (args.content.children.length == 0) {
        var element = document.createElement("div");
        element.textContent = tooltipText;
        element.style.color = "white";
        args.content.appendChild(element);
    }
    else {
        args.content.children[0].textContent = tooltipText;
    }
}, false);
