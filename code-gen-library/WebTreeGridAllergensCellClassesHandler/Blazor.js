//begin eventHandler
igRegisterScript("WebTreeGridAllergensCellClassesHandler", () => {
    let allergenItems = ['Frozen Shrimps', 'Wild Salmon Fillets', 'Fresh Cheese', 'Skimmed Milk 1L', 'Butter'];

    return {
        allergensFont: (rowData, columnKey) => allergenItems.indexOf(rowData[columnKey]) >= 0,
    };
}, true);
//end eventHandler

let requiredStyles = `
<!--begin styles-->
.allergensFont {
    color: royalblue !important;
}
<!--end styles-->
`;