//begin eventHandler
igRegisterScript("WebRowIslandGridCellEditEnter", (event) => {
    const container = document.getElementById("container");
    const message = document.createElement("p");
    message.textContent = `Row Island => 'cellEditEnter' with 'value':` + event.detail.oldValue, event.detail.cancel;
    container.appendChild(message);
}, false);
//end eventHandler