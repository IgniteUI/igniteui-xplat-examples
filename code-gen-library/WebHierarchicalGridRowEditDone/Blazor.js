//begin eventHandler
igRegisterScript("WebHierarchicalGridRowEditDone", (event) => {
    const container = document.getElementById("container");
    const message = document.createElement("p");
    message.textContent = `Hierarchical Grid => 'rowEditDone'`;
    container.appendChild(message);
}, false);
//end eventHandler