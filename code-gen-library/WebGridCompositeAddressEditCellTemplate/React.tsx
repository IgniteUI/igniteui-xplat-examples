//begin imports
import { IgrInput } from 'igniteui-react';
import { IgrCellTemplateContext } from 'igniteui-react-grids';
//end imports
import { CodeGenHelper } from 'igniteui-webcomponents-core';
export class WebGridCompositeAddressEditCellTemplate {
    //begin template
    //begin content
    public webGridCompositeAddressEditCellTemplate = (props: {dataContext: IgrCellTemplateContext}) => {

        var cell = props.dataContext.cell as any;
        var grid = CodeGenHelper.getDescription<IgcGridComponent>("content");
        if (cell === undefined || cell.row === undefined || cell.row.data === undefined) {
            return <></>;
        }
    
        return (
            <>
                <div className="contact-container--edit" style={{padding: "1rem"}}>
                    <IgrInput label='Country' inputOcurred={(input: any, e: any) =>
                        {
                            cell.row.data.Country = e.detail;
                            this.forceUpdate();
                        }
                        } value={cell.row.data.Country}></IgrInput>
                    <IgrInput label='City' inputOcurred={(input: any, e: any) =>
                        {
                            cell.row.data.City = e.detail;
                            this.forceUpdate();
                        }
                        } value={cell.row.data.City}></IgrInput>
                    <IgrInput label='Postal Code' inputOcurred={(input: any, e: any) =>
                        {
                            cell.row.data.PostalCode = e.detail;
                            this.forceUpdate();
                        }
                        } value={cell.row.data.PostalCode}></IgrInput>
                    <IgrInput label='Phone' inputOcurred={(input: any, e: any) =>
                        {
                            cell.row.data.Phone = e.detail;
                            this.forceUpdate();
                        }
                        } value={cell.row.data.Phone}></IgrInput>
                </div>
            </>
        );
    }
    //end content
    //end template
}