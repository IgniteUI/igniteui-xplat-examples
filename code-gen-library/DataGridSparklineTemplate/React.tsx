//begin imports
import { IIgrCellTemplateProps, IgrTemplateCellInfo } from 'igniteui-react-grids';
import { IgrSparkline } from 'igniteui-react-charts';
//end imports

export class DataGridSparklineTemplate {
//begin template
//begin content
    public dataGridSparklineTemplate = (props: IIgrCellTemplateProps) => {
        const info = props.dataContext as IgrTemplateCellInfo;
        return (
            <div style={{ width: "100%", height: "70px", background: "transparent" }}>
                <IgrSparkline
                    width="100%"
                    height="100%"
                    displayType="Line"
                    dataSource={info.rowItem.OrderHistory}
                    valueMemberPath="Sold"
                    labelMemberPath="Week"
                    brush="rgb(21, 190, 6)" />
            </div>
        );
    }
//end content
//end template
}
