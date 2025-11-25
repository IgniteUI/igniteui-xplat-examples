
public webGridExportingToggle = () => {
  const toolbars = document.querySelectorAll("igc-grid-toolbar");

  toolbars.forEach((toolbar) => {
    const exporting = toolbar.querySelector(
      "igc-grid-toolbar-exporter"
    ) as HTMLElement;

    if (exporting) {
      exporting.style.display = exporting.style.display === "none" ? "" : "none";
    }

  });
};
