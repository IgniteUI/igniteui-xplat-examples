//begin imports
import { IgrCellTemplateContext } from 'igniteui-react-grids';
//end imports

export class WebGridCompositeAddressEditCellTemplate {
    //begin template
    //begin content
    public webGridCompositeAddressEditCellTemplate = (props: {dataContext: IgrCellTemplateContext}) => {

        var cell = props.dataContext.cell as any;
        if (cell === undefined || cell.row === undefined || cell.row.data === undefined) {
            return <></>
        }
    
        function keyUpHandler(event: any, ctx: IgrCellTemplateContext) {
            var cell = ctx.cell as any;
            if (cell !== undefined && cell.row !== undefined && cell.row.data !== undefined) {
                cell.row.data[event.target.id] = event.target.value;
            }
        }
    
        return (
            <>
                <div className="contact-container--edit" style={{display: "inline-grid"}}>         
                    <div>
                        <strong>Name:</strong>
                        <input id='ContactName' onKeyUp={(e: any) => keyUpHandler(e, props.dataContext)} value={cell.row.data.ContactName}></input>
                    </div>
                    <div>
                        <strong>Title:</strong>
                        <input id='ContactTitle' onKeyUp={(e: any) => keyUpHandler(e, props.dataContext)} value={cell.row.data.ContactTitle}></input>
                    </div>         
                    <div>
                        <strong>Company:</strong>
                        <input id='CompanyName' onKeyUp={(e: any) => keyUpHandler(e, props.dataContext)} value={cell.row.data.CompanyName}></input>
                    </div>
                </div>
            </>
        );
    }
    //end content
    //end template
}