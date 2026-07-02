//begin eventHandler
igRegisterScript("DataGridDeleteRowButtonTemplate", (s, args) => {
    const content = args.content;
    if (content.childElementCount === 0) {
        const button = document.createElement("button");
        button.innerText = "Delete";
        button.onclick = (event) => {
            const grid = document.getElementById("grid");
            const btn = event.currentTarget;
            const viewIndex = parseInt(btn.id);
            const rowItem = grid.actualDataSource.getItemAtIndex(viewIndex);
            grid.removeItem(rowItem);
        };
        content.appendChild(button);
    }

    const button = content.children[0];
    button.disabled = args.cellInfo.isDeleted;
    button.id = args.cellInfo.dataRow.toString();
}, false);
//end eventHandler
