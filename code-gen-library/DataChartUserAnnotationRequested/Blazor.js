// The chart asks for the annotation's label, details and colours when the reader draws one from the
// toolbar, and draws it once the dialog answers: Done finishes the annotation with what was entered,
// Cancel abandons it.
igRegisterScript("DataChartUserAnnotationRequested", (sender, args) => {
    var chart = sender;
    var info = args.annotationInfo;

    var popup = document.createElement("div");
    popup.style.cssText = "position: fixed; display: flex; flex-direction: column; top: 50%; left: 50%; " +
        "transform: translate(-50%, -50%); width: 13rem; background-color: white; border: 1px black solid; " +
        "border-radius: 0.25rem; padding: 0.5rem; gap: 0.25rem; box-shadow: 0.05rem 0.05rem 0.5rem 0.05rem gray; z-index: 1000;";

    var addLabel = (text) => {
        var label = document.createElement("label");
        label.textContent = text;
        popup.appendChild(label);
    };

    addLabel("Label:");
    var labelInput = document.createElement("input");
    labelInput.type = "text";
    labelInput.value = "Enter Label";
    popup.appendChild(labelInput);

    addLabel("Details:");
    var detailsInput = document.createElement("textarea");
    detailsInput.value = "Enter Details";
    detailsInput.style.cssText = "height: 4rem; resize: none;";
    popup.appendChild(detailsInput);

    addLabel("Badge Color:");
    var badgeColorInput = document.createElement("input");
    badgeColorInput.type = "color";
    badgeColorInput.value = "#000000";
    popup.appendChild(badgeColorInput);

    addLabel("Main Color:");
    var mainColorInput = document.createElement("input");
    mainColorInput.type = "color";
    mainColorInput.value = "#000000";
    popup.appendChild(mainColorInput);

    var buttons = document.createElement("div");
    buttons.style.cssText = "display: flex; justify-content: center; gap: 1rem; padding: 1rem;";
    var doneButton = document.createElement("button");
    doneButton.textContent = "Done";
    var cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
    buttons.appendChild(doneButton);
    buttons.appendChild(cancelButton);
    popup.appendChild(buttons);

    doneButton.onclick = () => {
        info.label = labelInput.value;
        info.annotationData = detailsInput.value;
        info.badgeColor = badgeColorInput.value;
        info.mainColor = mainColorInput.value;
        chart.finishAnnotationFlow(info);
        popup.remove();
    };
    cancelButton.onclick = () => {
        if (info.annotationId != null) {
            chart.cancelAnnotationFlow(info.annotationId);
        }
        popup.remove();
    };

    document.body.appendChild(popup);
}, false);
