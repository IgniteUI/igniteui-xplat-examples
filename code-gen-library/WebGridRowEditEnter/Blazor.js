//begin eventHandler
igRegisterScript("WebGridRowEditEnter", (event) => {
    const container = document.getElementById("container");
    const message = document.createElement("p");
    message.textContent = `=> 'rowEditEnter' with 'RowID':` + event.detail.rowID;
    container.appendChild(message);
}, false);
//end eventHandler