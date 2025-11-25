
public webGridColumnPinningToggle = () => {
  const toolbars = document.querySelectorAll("igc-grid-toolbar");

  toolbars.forEach((toolbar) => {
    const pinning = toolbar.querySelector(
      "igc-grid-toolbar-pinning"
    ) as HTMLElement;

    if (pinning) {
       pinning.style.display = pinning.style.display === "none" ? "" : "none";
    }

  });
};
