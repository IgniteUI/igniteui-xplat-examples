//begin eventHandler
igRegisterScript("WebGridClipboardOperationsColumnInit", (e) => {
    var column = e.detail;
    column.formatter = columnFormatter;
    column.header = "🎉" + column.field;
}, false);
//end eventHandler

//begin supportingMethods
function columnFormatter(e) {
    return "** " + e + " **";
}
//end supportingMethods