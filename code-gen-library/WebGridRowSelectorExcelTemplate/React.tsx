//begin imports
import { IgrRowSelectorTemplateContext } from 'igniteui-react-grids';
//end imports

export class WebGridRowSelectorExcelTemplate {
//begin template
//begin content
public webGridRowSelectorExcelTemplate = (e : { dataContext: IgrRowSelectorTemplateContext}) => {
    return <><span style={{display: "block", width:"30px"}}> {e.dataContext.implicit.index}</span></>;
}
//end content
//end template
}