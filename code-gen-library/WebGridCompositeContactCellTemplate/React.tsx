//begin imports
import { IgrCellTemplateContext } from 'igniteui-react-grids';
//end imports

export class WebGridCompositeContactCellTemplate {
    //begin template
    //begin content
    public webGridCompositeContactCellTemplate = (props: {dataContext: IgrCellTemplateContext}) => {
        var cell = props.dataContext.cell as any;
        if (cell === undefined || cell.row === undefined || cell.row.data === undefined) {
            return <></>;
        }
    
        return (
        <>
            <div class="contact-container">
                <span><strong>Name:</strong> {cell.row.data.ContactName}</span>
                <span><strong>Title:</strong> {cell.row.data.ContactTitle}</span>
                <br />
                <span><strong>Company:</strong> {cell.row.data.CompanyName}</span>
                <br />
            </div>
        </>
        );
    }
    //end content
    //end template
}