//begin imports
import { IgcPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-webcomponents-layouts';
import { IgcGridComponent } from 'igniteui-webcomponents-grids/grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebGridAddRow {


    //begin eventHandler
    public webGridAddRow(sender: any, args: IgcPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        //TODO
        var grid = CodeGenHelper.getDescription<IgcGridComponent>("content");
        const randomInteger = (start: number, end: number) => Math.floor(Math.random() * (end - start + 1)) + start;
        const randomFloat = (start: number, end: number) => Math.random() * (end - start) + start;

        //TODO Refactor later
        if (!(grid as any).__productId) {
            (grid as any).__productId = 0;
        }
        var year = randomInteger(2000, 2050);
        var month = randomInteger(0, 11);
        var day = randomInteger(1, 25);
        grid.addRow({
            CategoryID: randomInteger(1, 10),
            Discontinued: randomInteger(1, 10) % 2 === 0,
            OrderDate: new Date(year, month, day).toISOString().slice(0, 10),
            ProductID: (grid as any).__productId++,
            ProductName: 'Product with index ' + randomInteger(0, 20),
            QuantityPerUnit: (randomInteger(1, 10) * 10).toString() + ' pcs.',
            ReorderLevel: randomInteger(10, 20),
            SupplierID: randomInteger(1, 20),
            UnitPrice: randomInteger(10, 1000),
            UnitsInStock: randomInteger(1, 100),
            UnitsOnOrder: randomInteger(1, 20)
        });

        console.log("test");
    }
    //end eventHandler
}