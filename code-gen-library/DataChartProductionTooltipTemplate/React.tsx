//begin imports
//end imports

export class DataChartProductionTooltipTemplate {
//begin template
//begin content
    public dataChartProductionTooltipTemplate = (props: { dataContext: any }) => {
        const item = props.dataContext.item;
        const series = props.dataContext.series;
        if (item == null || series == null) {
            return <div />;
        }
        // Every fuel is listed whichever column is hovered, so the reader sees the country's whole
        // mix; the one the hovered series draws is tinted with that series' own brush so it can be
        // picked out of the five.
        const fuels = ["Coal", "Hydro", "Nuclear", "Gas", "Oil"];
        return (
            <div className="ui-tooltip-content">
                <div className="tooltipTitle">{item.country} Production</div>
                {fuels.map((fuel) => (
                    <div className="tooltipHorizontal" key={fuel}
                         style={{ color: series.valueMemberPath === fuel ? series.actualBrush : "black" }}>
                        <label className="tooltipLbl" style={{ width: "4rem" }}>{fuel}:</label>
                        <label className="tooltipVal">{item[fuel.toLowerCase()]}</label>
                    </div>
                ))}
            </div>
        );
    }
//end content
//end template
}
