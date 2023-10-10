//begin imports
import { IgrHeadSelectorTemplateContext } from 'igniteui-react-grids';
//end imports

export class WebGridHeaderRowSelectorExcelTemplate {
    //begin template
    //begin content
    public webGridHeaderRowSelectorExcelTemplate = (e: { dataContext: IgrHeadSelectorTemplateContext }) => {
        const ctx = e.dataContext;
        if (ctx.implicit.selectedCount > 0 && ctx.implicit.selectedCount === ctx.implicit.totalCount) {
            return <><span style={{display: "block", width:"30px"}}><i style={{color: "rgb(239, 184, 209)"}}>◢</i></span></>;
        } else {
            return <><span style={{display: "block", width:"30px"}}><i>◢</i></span></>;
        }
    };
    //end content
    //end template
}