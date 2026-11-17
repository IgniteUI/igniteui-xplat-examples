//begin eventHandler
registerScript("WebRowIslandGridCellEditDone", (event) => {
    const container = document.getElementById("container");
    const message = document.createElement("p");
    message.textContent = `Row Island => 'cellEditDone'`;
    container.appendChild(message);
});
//end eventHandler