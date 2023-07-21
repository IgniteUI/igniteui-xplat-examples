//begin eventHandler
igRegisterScript("WebGridExportEventMultiColumnHeaders", (ev) => {
    ev.detail.options.ignoreMultiColumnHeaders = false;
}, false);
//end eventHandler