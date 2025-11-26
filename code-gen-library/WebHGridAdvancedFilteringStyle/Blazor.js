//begin eventHandler
igRegisterScript("WebHGridAdvancedFilteringStyle", (args) => {
    //OMIT HANDLER
}, false);
//end eventHandler

let requiredStyles = `
<!--begin styles-->
#hierarchicalGrid1 {
    --ig-query-builder-header-foreground: #512da8;
    --ig-query-builder-color-expression-group-and: #eb0000;
    --ig-query-builder-color-expression-group-or: #0000f3;
    --ig-query-builder-subquery-header-background: var(--ig-gray-300);
    --ig-query-builder-subquery-border-color: var(--ig-warn-500);
    --ig-query-builder-subquery-border-radius: 4px;
}
<!--end styles-->
`;