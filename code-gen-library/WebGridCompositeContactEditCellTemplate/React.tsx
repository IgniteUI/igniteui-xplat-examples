//begin imports
import { IgrCellTemplateContext } from 'igniteui-react-grids';
//end imports

export class WebGridCompositeContactEditCellTemplate {
    //begin template
    //begin content
    public webGridCompositeContactEditCellTemplate = (props: {dataContext: IgrCellTemplateContext}) => {

        var cell = props.dataContext.cell as any;
        if (cell === undefined || cell.row === undefined || cell.row.data === undefined) {
            return <></>
        }

        return (
            <>
                <div className="contact-container--edit" style={{display: "inline-grid"}}>
                    <div>
                        <strong>Name:</strong>
                        <input id='ContactName' onChange={(e: any) => 
                            {
                                cell.row.data.ContactName = e.target.value;
                                this.forceUpdate();
                            }
                            } value={cell.row.data.ContactName}></input>
                    </div>
                    <div>
                        <strong>Title:</strong>
                        <input id='ContactTitle' onChange={(e: any) =>
                            {
                                cell.row.data.ContactTitle = e.target.value;
                                this.forceUpdate();
                            }} value={cell.row.data.ContactTitle}></input>
                    </div>
                    <div>
                        <strong>Company:</strong>
                        <input id='CompanyName' onChange={(e: any) =>
                            {
                                cell.row.data.CompanyName = e.target.value;
                                this.forceUpdate();
                            }} value={cell.row.data.CompanyName}></input>
                    </div>
                </div>
            </>
        );
    }
    //end content
    //end template
}