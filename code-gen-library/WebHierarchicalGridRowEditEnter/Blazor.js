//begin eventHandler
igRegisterScript("WebHierarchicalGridRowEditEnter", (event) => {
    const container = document.getElementById("container");
    const message = document.createElement("p");
    message.textContent = `Hierarchical Grid => 'rowEditEnter' with 'RowID':` + event.detail.rowID;
    container.appendChild(message);
}, false);
//end eventHandler