//begin eventHandler
igRegisterScript("WebHierarchicalGridCellEditDone", (event) => {
    const container = document.getElementById("container");
    const message = document.createElement("p");
    message.textContent = `Hierarchical Grid => 'cellEditDone'`;
    container.appendChild(message);
}, false);
//end eventHandler