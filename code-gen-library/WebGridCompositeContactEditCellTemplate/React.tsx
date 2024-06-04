//begin imports
import { IgrInput } from 'igniteui-react';
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
                <div className="contact-container--edit" style={{padding: "1rem"}}>
                    <IgrInput label='Name' inputOcurred={(input: any, e: any) =>
                        {
                            cell.row.data.ContactName = e.detail;
                            this.forceUpdate();
                        }
                        } value={cell.row.data.ContactName}></IgrInput>
                    <IgrInput label='Title' inputOcurred={(input: any, e: any) =>
                        {
                            cell.row.data.ContactTitle = e.detail;
                            this.forceUpdate();
                        }
                        } value={cell.row.data.ContactTitle}></IgrInput>
                    <IgrInput label='Company' inputOcurred={(input: any, e: any) =>
                        {
                            cell.row.data.Company = e.detail;
                            this.forceUpdate();
                        }
                        } value={cell.row.data.Company}></IgrInput>
                </div>
            </>
        );
    }
    //end content
    //end template
}