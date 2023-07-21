//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Grids;
//end imports

public class WebGridAddRow
{

    //begin eventHandler
    //WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionButtonClickEventHandler
    public void WebGridAddRow(object sender, PropertyEditorPropertyDescriptionButtonClickEventArgs args)
    {
        //TODO
        var grid = CodeGenHelper.GetDescription<WebGrid>("content");

        this.grid.addRow(
            CategoryID: randomInteger(1, 10),
            Discontinued: randomInteger(1, 10) % 2 == 0,
            OrderDate: new Date(randomInteger(2000, 2050),
            randomInteger(0, 11), randomInteger(1, 25))
            .toISOString().slice(0, 10),
            ProductID: this.addProductId++,
            ProductName: "Product with index " + randomInteger(0, 20),
            QuantityPerUnit: (randomInteger(1, 10) * 10).toString() + " pcs.",
            ReorderLevel: randomInteger(10, 20),
            SupplierID: randomInteger(1, 20),
            UnitPrice: randomInteger(10, 1000),
            UnitsInStock: randomInteger(1, 100),
            UnitsOnOrder: randomInteger(1, 20)
        );

    }
    //end eventHandler
}