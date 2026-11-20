//begin eventHandler
registerScript("WebGridCellEditExit", (event) => {
    const container = document.getElementById("container");
    const message = document.createElement("p");
    message.textContent = `=> 'cellEditExit'`;
    container.appendChild(message);
});
//end eventHandler