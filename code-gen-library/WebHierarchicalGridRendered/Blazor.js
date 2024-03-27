//begin eventHandler
igRegisterScript("WebHierarchicalGridRendered", (event) => {
        const hierarchicalGrid = document.getElementsByTagName("igc-hierarchical-grid")[0];
        hierarchicalGrid.parentElement.style.display = "flex";
        const container = document.createElement("div");
        container.id = "container";
        container.style.height = "80vh";
        container.style.width = "100%";
        container.style.overflow = "auto";
        hierarchicalGrid.parentElement.appendChild(container);
        const title = document.createElement("span");
        title.textContent = "Events execution sequence:";
        container.appendChild(title);
}, false);
//end eventHandler