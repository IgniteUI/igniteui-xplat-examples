//begin eventHandler
igRegisterScript("WebHierarchicalGridCellEditExit", (event) => {
    const container = document.getElementById("container");
    const message = document.createElement("p");
    message.textContent = `Hierarchical Grid => 'cellEditExit'`;
    container.appendChild(message);
}, false);
//end eventHandler