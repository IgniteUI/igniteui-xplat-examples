
public webGridColumnPinningToggle = () => {
  const toolbars = document.querySelectorAll("igc-grid-toolbar");

  toolbars.forEach((toolbar) => {
    const pinning = toolbar.querySelector(
      "igc-grid-toolbar-pinning"
    );

    if (pinning) {
      pinning.style.display === "none" ? "" : "none";
    }

  });
};
