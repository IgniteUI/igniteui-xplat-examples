//begin eventHandler
igRegisterScript("WebHierarchicalGridCellEdit", (event) => {
    const container = document.getElementById("container");
    const message = document.createElement("p");
    message.textContent = `Hierarchical Grid => 'cellEdit' with 'newValue':` + event.detail.newValue, event.detail.cancel;
    container.appendChild(message);
}, false);
//end eventHandler