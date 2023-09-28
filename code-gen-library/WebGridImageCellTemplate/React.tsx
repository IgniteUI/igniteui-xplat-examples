//begin imports
import { IgrCellTemplateContext } from 'igniteui-react-grids';
//end imports

export class WebGridBeatsPerMinuteTemplate {
    //begin template
    //begin content
    public IgrCellTemplateContext = (props: {dataContext: IgrCellTemplateContext}) => {
        var cell = props.dataContext.cell as any;
        if (cell === undefined || cell.row === undefined || cell.row.data === undefined) {
            return <></>;
        }

        return (
            <>
                <div>
                    <img src="${ctx.cell.value}"
                        style="border: 1px solid black;
                        object-fit: fill;
                        height: 2rem;
                    width: 3rem;"/>
                </div>`;
            </>
        )
    }
    //end content
    //end template
}
