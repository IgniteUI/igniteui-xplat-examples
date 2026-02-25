//begin imports
import { IgrHeadSelectorTemplateContext } from 'igniteui-react-grids';
//end imports

export class WebGridHeaderRowSelectorExcelTemplate {
    //begin template
    //begin content
    public webGridHeaderRowSelectorExcelTemplate = (e: { dataContext: IgrHeadSelectorTemplateContext }) => {
        const ctx = e.dataContext;
        if (ctx.implicit.selectedCount > 0 && ctx.implicit.selectedCount === ctx.implicit.totalCount) {
            return <><span style={{width:"30px", display: "flex", justifyContent: "center"}}><i style={{color: "rgb(239, 184, 209)", width:"18px", cursor: "pointer"}}>◢</i></span></>;
        } else {
            return <><span style={{width:"30px", display: "flex", justifyContent: "center"}}><i style={{width:"18px", cursor: "pointer"}}>◢</i></span></>;
        }
    };
    //end content
    //end template
}