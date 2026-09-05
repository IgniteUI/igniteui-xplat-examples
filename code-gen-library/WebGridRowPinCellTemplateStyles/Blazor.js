//begin eventHandler
igRegisterScript("WebGridRowPinCellTemplateStyles", (args) => {
    //OMIT HANDLER
}, false);
//end eventHandler

let requiredStyles = `
<!--begin styles-->
.customIcon {
    display: flex;
    width: 100%;
    justify-content: center;
}

.customIconSpan {
    cursor: pointer;
}
<!--end styles-->
`;