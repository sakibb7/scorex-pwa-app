"use strict";
document.addEventListener("DOMContentLoaded", function () {
  // //preloader
  // const preloader = document.querySelector(".preloader");
  // setTimeout(function () {
  //   preloader && preloader.classList.add("active");
  // }, 0);
  // setTimeout(() => {
  //   preloader && preloader.classList.add("hidden");
  //   preloader && preloader.classList.remove("active");
  // }, 2000);

  function createTab(
    tabArea,
    activeTabButtonClass,
    activeTabClass,
    hiddenTabClass,
    tabButtonClass,
    tabContentClass
  ) {
    const tabButtons = document.querySelectorAll(`.${tabButtonClass}`);
    const tabContent = document.querySelectorAll(`.${tabContentClass}`);

    tabButtons.forEach((e) => {
      e.addEventListener("click", () => {
        if (!e.classList.contains(activeTabClass)) {
          const activeTabButton = tabArea.querySelector(
            `.${activeTabButtonClass}`
          );
          const tabData = tabArea.querySelector(`#${e.id}_data`);

          activeTabButton.classList.remove(activeTabButtonClass);
          e.classList.add(activeTabButtonClass);

          tabArea
            .querySelector(`.${activeTabClass}`)
            .classList.remove(activeTabClass);
          //Add hiddentab class on every tab data element if the classlist doen't contain hiddentab class
          tabContent.forEach((e) => {
            if (!e.classList.contains(hiddenTabClass)) {
              e.classList.add(hiddenTabClass);
            }
          });

          tabData.classList.remove(hiddenTabClass);
          tabData.classList.add(activeTabClass);
        }
      });
    });
  }

  const liveMatchTab = document.querySelector(".liveMatchTab");
  liveMatchTab &&
    createTab(
      liveMatchTab,
      "activeTabButton",
      "activeTab",
      "hiddenTab",
      "tabButton",
      "tab-content"
    );

  const playerInfoTab = document.querySelector(".playerInfoTab");
  playerInfoTab &&
    createTab(
      playerInfoTab,
      "activeTabButton",
      "activeTab",
      "hiddenTab",
      "tabButton",
      "tab-content"
    );
});
