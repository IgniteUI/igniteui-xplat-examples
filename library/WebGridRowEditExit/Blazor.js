//begin eventHandler
igRegisterScript("WebGridRowEditExit", (event) => {
    const container = document.getElementById("container");
    const message = document.createElement("p");
    message.textContent = `=> 'rowEditExit'  << End of cycle >>`;
    container.appendChild(message);
}, false);
//end eventHandler