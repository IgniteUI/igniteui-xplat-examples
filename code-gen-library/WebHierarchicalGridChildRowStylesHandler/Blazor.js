//begin template
igRegisterScript("WebHierarchicalGridChildRowStylesHandler", () => {
    return {
        'border-left': (row) => row.data['BillboardReview'] > 70 ? '3.5px solid #dda15e' : null
    };
}, true);
//end template