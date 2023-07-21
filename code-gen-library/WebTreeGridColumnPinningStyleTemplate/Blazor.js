//begin eventHandler
igRegisterScript("WebTreeGridColumnPinningStyleTemplate", (args) => {
    //OMIT HANDLER
}, false);
//end eventHandler
let requiredStyles = `
<!--begin styles-->
#treeGrid {
	--pinned-border-width: 5px;
    --pinned-border-style: double;
    --pinned-border-color: #FFCD0F;
	--cell-active-border-color: #FFCD0F;
}
<!--end styles-->
`;