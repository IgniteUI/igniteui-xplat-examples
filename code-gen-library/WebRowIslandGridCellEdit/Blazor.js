//begin eventHandler
registerScript("WebRowIslandGridCellEdit", (event) => {
    const container = document.getElementById("container");
    const message = document.createElement("p");
    message.textContent = `Row Island => 'cellEdit' with 'newValue':` + event.detail.newValue, event.detail.cancel;
    container.appendChild(message);
});
//end eventHandler