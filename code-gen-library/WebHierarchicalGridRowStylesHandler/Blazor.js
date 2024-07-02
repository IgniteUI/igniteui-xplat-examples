//begin eventHandler
igRegisterScript("WebHierarchicalGridRowStylesHandler", () => {
    return {
        background:(row) => row.data['HasGrammyAward'] ? '#eeddd3' : '#f0efeb',
        'border-left': (row) => row.data['HasGrammyAward'] ? '2px solid #dda15e' : null
    };
}, true);
//end eventHandler