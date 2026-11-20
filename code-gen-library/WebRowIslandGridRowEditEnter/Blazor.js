//begin eventHandler
registerScript("WebRowIslandGridRowEditEnter", (event) => {
    const container = document.getElementById("container");
    const message = document.createElement("p");
    message.textContent = `Row Island => 'rowEditEnter' with 'RowID':` + event.detail.rowID;
    container.appendChild(message);
});
//end eventHandler