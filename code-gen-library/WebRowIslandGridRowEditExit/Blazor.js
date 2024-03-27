//begin eventHandler
igRegisterScript("WebRowIslandGridRowEditExit", (event) => {
    const container = document.getElementById("container");
    const message = document.createElement("p");
    message.textContent = `Row Island => 'rowEditExit'  << End of cycle >>`;
    container.appendChild(message);
}, false);
//end eventHandler