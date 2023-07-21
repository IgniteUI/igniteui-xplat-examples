//begin eventHandler
igRegisterScript("WebGridRendered", (event) => {
        const grid = document.getElementsByTagName("igc-grid")[0];
        grid.parentElement.style.display = "flex";
        const container = document.createElement("div");
        container.id = "container";
        container.style.height = "100vh";
        container.style.width = "100%";
        container.style.overflow = "auto";
        grid.parentElement.appendChild(container);
        const title = document.createElement("span");
        title.textContent = "Events execution sequence";
        container.appendChild(title);
}, false);
//end eventHandler