//begin eventHandler
registerScript("WebGridCellEditDone", (event) => {
    const container = document.getElementById("container");
    const message = document.createElement("p");
    message.textContent = `=> 'cellEditDone'`;
    container.appendChild(message);
});
//end eventHandler