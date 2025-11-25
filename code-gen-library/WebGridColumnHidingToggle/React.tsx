public webGridColumnHidingToggle = () => {
  const toolbars = document.querySelectorAll("igc-grid-toolbar");

  toolbars.forEach((toolbar) => {
    const hiding = toolbar.querySelector(
      "igc-grid-toolbar-hiding"
    ) as HTMLElement;

    if (hiding) {
      hiding.style.display = hiding.style.display === "none" ? "" : "none";
    }

  });
};