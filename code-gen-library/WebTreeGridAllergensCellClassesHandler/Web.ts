export class WebTreeGridAllergensCellClassesHandler {
//begin eventHandler
public allergenItems = ['Frozen Shrimps', 'Wild Salmon Fillets', 'Fresh Cheese', 'Skimmed Milk 1L', 'Butter'];

public webTreeGridAllergensCellClassesHandler = {
    allergensFont: (rowData: any, columnKey: any): boolean => this.allergenItems.indexOf(rowData[columnKey]) >= 0,
}
//end eventHandler
    
public requiredStyles = `
<!--begin styles-->
.allergensFont {
    color: royalblue !important;
}
<!--end styles-->
`;
}