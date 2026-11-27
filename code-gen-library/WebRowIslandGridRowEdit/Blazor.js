//begin eventHandler
registerScript("WebRowIslandGridRowEdit", (event) => {
    const container = document.getElementById("container");
    const message = document.createElement("p");
    message.textContent = `Row Island => 'rowEdit'`;
    container.appendChild(message);
});
//end eventHandler