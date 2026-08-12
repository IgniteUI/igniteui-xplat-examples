//begin eventHandler
igRegisterScript("DataGridSparklineTemplate", (s, e) => {
    const content = e.content;
    const info = e.cellInfo;
    let chart = null;

    if (content.childElementCount === 0) {
        chart = document.createElement("igc-sparkline");
        chart.width = '100%';
        chart.height = '100%';
        chart.valueMemberPath = 'Sold';
        chart.labelMemberPath = 'Week';
        chart.displayType = 'Line';
        chart.brush = 'rgb(21, 190, 6)';

        const container = document.createElement("div");
        container.style.width = "100%";
        container.style.height = "70px";
        container.style.background = "transparent";
        container.append(chart);

        content.appendChild(container);
    } else {
        chart = content.children[0].children[0];
    }

    chart.dataSource = info.rowItem.OrderHistory;
}, false);
//end eventHandler
