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
    
        function keyUpHandler(event: any, ctx: IgrCellTemplateContext) {
            var cell = ctx.cell as any;
            if (cell !== undefined && cell.row !== undefined && cell.row.data !== undefined) {
                cell.row.data[event.target.id] = event.target.value;
            }
         }
    
        return (
            <>
                <div className="address-container--edit" style={{display: "inline-grid"}}>
                    <div>
                        <span><strong>Country:</strong></span>
                        <input id='Country' onKeyUp={(e: any) => keyUpHandler(e, props.dataContext)} value={cell.row.data.Country}></input>
                        <br/>
                        <span><strong>City:</strong></span>
                        <input id='City' onKeyUp={(e: any) => keyUpHandler(e, props.dataContext)} value={cell.row.data.City}></input>
                    </div>
                    <div>
                        <span><strong>Postal Code:</strong></span>
                        <input id='PostalCode' onKeyUp={(e: any) => keyUpHandler(e, props.dataContext)} value={cell.row.data.PostalCode}></input>
                        <br/>
                        <span><strong>Selected:</strong></span>
                        <input id='Phone' onKeyUp={(e: any) => keyUpHandler(e, props.dataContext)} value={cell.row.data.Phone}></input>
                    </div>
                    <br/>
                </div>
            </>
        );
    }
    //end content
    //end template
}