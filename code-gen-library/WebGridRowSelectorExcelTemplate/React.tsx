//begin imports
import { IgrRowSelectorTemplateContext } from 'igniteui-react-grids';
//end imports

export class WebGridRowSelectorExcelTemplate {
//begin template
//begin content
public webGridRowSelectorExcelTemplate = (e : { dataContext: IgrRowSelectorTemplateContext}) => {
    return <><span style={{width:"30px", display: "flex", justifyContent: "center"}}> {e.dataContext.implicit.index}</span></>;
}
//end content
//end template
}