//begin template
igRegisterScript("WebHierarchicalGridCellStylesHandler", () => {
    return {
        background: (rowData, columnKey, cellValue, rowIndex) => rowIndex % 2 === 0 ? "#EFF4FD" : null,
        color: (rowData, columnKey, cellValue, rowIndex) => {
            if (columnKey === "HasGrammyAward") {
                return cellValue ? "#28a745" : "#dc3545";
            }
            return undefined;
        }
    };
}, true);
//end template