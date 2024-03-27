//begin eventHandler
igRegisterScript("WebHierarchicalGridRowEdit", (event) => {
    const container = document.getElementById("container");
    const message = document.createElement("p");
    message.textContent = `Hierarchical Grid => 'rowEdit'`;
    container.appendChild(message);
}, false);
//end eventHandler