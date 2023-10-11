//begin imports
import { IgrCellTemplateContext } from 'igniteui-react-grids';
//end imports

export class WebGridCompositeAddressEditCellTemplate {
    //begin template
    //begin content
    public webGridCompositeAddressEditCellTemplate = (props: {dataContext: IgrCellTemplateContext}) => {

        var cell = props.dataContext.cell as any;
        if (cell === undefined || cell.row === undefined || cell.row.data === undefined) {
            return <></>;
        }
    
        return (
            <>
                <div className="address-container--edit" style={{display: "inline-grid"}}>
                    <div>
                        <span><strong>Country:</strong></span>
                        <input id='Country' onChange={(e: any) => 
                            {
                                cell.row.data.Country = e.target.value;
                                this.forceUpdate();
                            }} value={cell.row.data.Country}></input>
                        <br/>
                        <span><strong>City:</strong></span>
                        <input id='City' onChange={(e: any) => 
                            {
                                cell.row.data.City = e.target.value;
                                this.forceUpdate();
                            }} value={cell.row.data.City}></input>
                    </div>
                    <div>
                        <span><strong>Postal Code:</strong></span>
                        <input id='PostalCode' onChange={(e: any) => 
                            {
                                cell.row.data.PostalCode = e.target.value;
                                this.forceUpdate();
                            }} value={cell.row.data.PostalCode}></input>
                        <br/>
                        <span><strong>Selected:</strong></span>
                        <input id='Phone' onChange={(e: any) => 
                            {
                                cell.row.data.Phone = e.target.value;
                                this.forceUpdate();
                            }} value={cell.row.data.Phone}></input>
                    </div>
                    <br/>
                </div>
            </>
        );
    }
    //end content
    //end template
}