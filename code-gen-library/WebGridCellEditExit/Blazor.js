//begin eventHandler
igRegisterScript("WebGridCellEditExit", (event) => {
    const container = document.getElementById("container");
    const message = document.createElement("p");
    message.textContent = `=> 'cellEditExit'`;
    container.appendChild(message);
}, false);
//end eventHandler