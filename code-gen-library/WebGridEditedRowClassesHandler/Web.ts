//begin imports
import { IgcRowType } from "igniteui-webcomponents-grids/grids";
import { IgcGridComponent } from 'igniteui-webcomponents-grids/grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebGridEditedRowClassesHandler {
  //begin eventHandler
  // Paired with WebGridPasteFromExcel, which populates this as rows are pasted.
  // Blazor shares it as a module-level var; in TypeScript each sample class
  // carries its own. Declared inside the eventHandler markers because only the
  // marked regions are emitted - outside them it is dropped, exactly as
  // WebGridPasteFromExcel/Web.ts declares its own copy inside the markers.
  public updatedRecsPK: any[] = [];

  public webGridEditedRowClassesHandler = {
    edited: (row: IgcRowType) => {
      const grid = CodeGenHelper.getDescription<IgcGridComponent>("content") as any;
      return this.updatedRecsPK.indexOf(row.data[grid.primaryKey]) !== -1;
    }
  };
  //end eventHandler

  public requiredStyles = `
    <!--begin styles-->
    .edited {
            font-style: italic;
            color: gray;
    }
    <!--end styles-->
    `;
}
