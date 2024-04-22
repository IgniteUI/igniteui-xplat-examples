//begin template
igRegisterScript("WebGridRowStylesHandler", () => {
    return {
        'background': (row) => (+row.data['Change'] < 0 && +row.data['YearlyChange'] < 0) ? '#FF000088' : '#00000000',
        'border': (row) => (+row.data['Change'] < 0 && +row.data['YearlyChange'] < 0) ? '2px solid' : '1px solid',
        'border-color': (row) => (+row.data['Change'] < 0 && +row.data['YearlyChange'] < 0) ? '#FF000099' : '#E9E9E9'
    };
}, true);
//end template