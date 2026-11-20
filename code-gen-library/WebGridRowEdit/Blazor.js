//begin eventHandler
registerScript("WebGridRowEdit", (event) => {
    const container = document.getElementById("container");
    const message = document.createElement("p");
    message.textContent = `=> 'rowEdit'`;
    container.appendChild(message);
});
//end eventHandler