//begin imports
import { IgrGridMasterDetailContext } from 'igniteui-react-grids';
//end imports

export class WebGridMasterDetailTemplate {
    //begin template
    //begin content
    public webGridMasterDetailTemplate = (props: {dataContext: IgrGridMasterDetailContext}) => {
        const data = props.dataContext.implicit;

        return (
            <>
            <div className="contact-container">
                <span><strong>Name:</strong> {data.ContactName}</span>
                <br />
                <span><strong>Title:</strong> {data.ContactTitle}</span>
                <br />
                <span><strong>Company:</strong> {data.CompanyName}</span>
                <br />
            </div>
            </>
        );
    };
    //end content
    //end template
}