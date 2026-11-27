//begin eventHandler
registerScript("WebRowIslandGridRowEditDone", (event) => {
    const container = document.getElementById("container");
    const message = document.createElement("p");
    message.textContent = `Row Island => 'rowEditDone'`;
    container.appendChild(message);
});
//end eventHandler