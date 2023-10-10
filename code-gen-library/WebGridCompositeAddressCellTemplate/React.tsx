//begin imports
import { IgrCellTemplateContext } from 'igniteui-react-grids';
//end imports

export class WebGridCompositeAddressCellTemplate {
    //begin template
    //begin content
    public webGridCompositeAddressCellTemplate = (props: {dataContext: IgrCellTemplateContext}) => {
        var cell = props.dataContext.cell as any;
        if (cell === undefined || cell.row === undefined || cell.row.data === undefined) {
            return <></>;
        }
    
        return (
        <>
            <div className="address-container">
                <div className="country-city">
                    <span><strong>Country:</strong> {cell.row.data.Country}</span>
                    <br/>
                    <span><strong>City:</strong> {cell.row.data.City}</span>
                </div>
                <div className="phone-pscode">
                    <span><strong>Postal Code:</strong> {cell.row.data.PostalCode}</span>
                    <br/>
                    <span><strong>Phone:</strong> {cell.row.data.Phone}</span>
                </div>
                <br />
            </div>
        </>
        );
    }
    //end content
    //end template
}