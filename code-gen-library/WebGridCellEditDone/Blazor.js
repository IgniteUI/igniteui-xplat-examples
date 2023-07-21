//begin eventHandler
igRegisterScript("WebGridCellEditDone", (event) => {
    const container = document.getElementById("container");
    const message = document.createElement("p");
    message.textContent = `=> 'cellEditDone'`;
    container.appendChild(message);
}, false);
//end eventHandler