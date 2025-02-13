
public webGridAdvancedFilteringToggle = () => {
  const toolbars = document.querySelectorAll("igc-grid-toolbar");

  toolbars.forEach((toolbar) => {
    const advancedFiltering = toolbar.querySelector(
      "igc-grid-toolbar-advanced-filtering"
    );

    if (advancedFiltering) {
        advancedFiltering.style.display === "none" ? "" : "none";
    }

  });
};
