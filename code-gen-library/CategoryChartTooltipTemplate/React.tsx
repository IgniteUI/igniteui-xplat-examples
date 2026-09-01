//begin imports
//end imports

export class CategoryChartTooltipTemplate {
//begin template
//begin content
    public categoryChartTooltipTemplate = (props: { dataContext: any }) => {
        const item = props.dataContext.item;
        if (item == null) {
            return <div />;
        }
        return (
            <div className="tooltipVertical">
                <div className="tooltipTitle">Franchise: {item.franchise}</div>
                <div className="tooltipLbl">Revenue of All Movies: {item.totalRevenue}</div>
                <div className="tooltipLbl">Highest Grossing Movie: ${item.highestGrossing}</div>
            </div>
        );
    }
//end content
//end template
}
