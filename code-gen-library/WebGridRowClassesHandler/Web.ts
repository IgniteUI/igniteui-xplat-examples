//begin imports
import { IgcRowType } from "igniteui-webcomponents-grids/grids";
//end imports

export class WebGridRowClassesHandler {
  //begin eventHandler
  public webGridRowClassesHandler = {
    activeRow: (row: IgcRowType) => row.index % 2 === 0
  };
  //end eventHandler

  public requiredStyles = `
    <!--begin styles-->
    .activeRow {
        border-top: 2px solid #fc81b8;
        border-left: 3px solid #e41c77;
    }
    <!--end styles-->
    `;
}
