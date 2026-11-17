//begin eventHandler
registerScript("WebHierarchicalGridCellEditEnter", (event) => {
    const container = document.getElementById("container");
    const message = document.createElement("p");
    message.textContent = `Hierarchical Grid => 'cellEditEnter' with 'value':` + event.detail.oldValue, event.detail.cancel;
    container.appendChild(message);
});
//end eventHandler