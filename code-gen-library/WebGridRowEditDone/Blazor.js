//begin eventHandler
registerScript("WebGridRowEditDone", (event) => {
    const container = document.getElementById("container");
    const message = document.createElement("p");
    message.textContent = `=> 'rowEditDone'`;
    container.appendChild(message);
});
//end eventHandler