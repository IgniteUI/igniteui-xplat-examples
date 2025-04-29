//begin imports
import { IgrInput } from 'igniteui-react';
import { IgrCellTemplateContext, IgrGrid } from 'igniteui-react-grids';
//end imports

export class WebGridCompositeContactEditCellTemplate {
    //begin template
    //begin content
    public webGridCompositeContactEditCellTemplate = (props: {dataContext: IgrCellTemplateContext}) => {

        var cell = props.dataContext.cell as any;
        var grid = CodeGenHelper.getDescription<IgrGrid>("content");
        if (cell === undefined || cell.row === undefined || cell.row.data === undefined) {
            return <></>
        }

        return (
            <>
                <div className="contact-container--edit" style={{padding: "1rem"}}>
                    <IgrInput label='Name' onInput={(e: any) =>
                        {
                            cell.row.data.ContactName = e.detail;
                            grid.forceUpdate();
                        }
                        } value={cell.row.data.ContactName}></IgrInput>
                    <IgrInput label='Title' onInput={(e: any) =>
                        {
                            cell.row.data.ContactTitle = e.detail;
                            grid.forceUpdate();
                        }
                        } value={cell.row.data.ContactTitle}></IgrInput>
                    <IgrInput label='Company' onInput={(e: any) =>
                        {
                            cell.row.data.Company = e.detail;
                            grid.forceUpdate();
                        }
                        } value={cell.row.data.Company}></IgrInput>
                </div>
            </>
        );
    }
    //end content
    //end template
}