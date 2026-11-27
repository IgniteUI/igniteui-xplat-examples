//begin eventHandler
registerScript("WebRowIslandGridCellEditExit", (event) => {
    const container = document.getElementById("container");
    const message = document.createElement("p");
    message.textContent = `Row Island => 'cellEditExit'`;
    container.appendChild(message);
});
//end eventHandler