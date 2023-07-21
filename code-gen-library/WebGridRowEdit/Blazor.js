//begin eventHandler
igRegisterScript("WebGridRowEdit", (event) => {
    const container = document.getElementById("container");
    const message = document.createElement("p");
    message.textContent = `=> 'rowEdit'`;
    container.appendChild(message);
}, false);
//end eventHandler