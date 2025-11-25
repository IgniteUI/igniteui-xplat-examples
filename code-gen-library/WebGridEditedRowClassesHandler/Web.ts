//begin imports
import { IgcRowType } from "igniteui-webcomponents-grids/grids";
import { IgcGridComponent } from 'igniteui-webcomponents-grids/grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebGridEditedRowClassesHandler {
  //begin eventHandler
  public webGridEditedRowClassesHandler = {
    edited: (row: IgcRowType) => {
      const grid = CodeGenHelper.getDescription<IgcGridComponent>("content") as any;
      return updatedRecsPK.indexOf(row.data[grid.primaryKey]) !== -1;
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
