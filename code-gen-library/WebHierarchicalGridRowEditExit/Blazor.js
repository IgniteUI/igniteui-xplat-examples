//begin eventHandler
igRegisterScript("WebHierarchicalGridRowEditExit", (event) => {
    const container = document.getElementById("container");
    const message = document.createElement("p");
    message.textContent = `Hierarchical Grid => 'rowEditExit'  << End of cycle >>`;
    container.appendChild(message);
}, false);
//end eventHandler