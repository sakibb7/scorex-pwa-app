"use strict";
document.addEventListener("DOMContentLoaded", function () {
  /*
===============================================================
=> Reusable Functions Start
===============================================================
  */
  // modal toggle function
  function modalToggle(modalName, modalBox, open, close) {
    modalName.addEventListener("click", () => {
      if (modalBox.classList.contains(open)) {
        modalBox.classList.remove(open);
        modalBox.classList.add(close);
        document.removeEventListener("click", closeDropdownOutside);
      } else {
        modalBox.classList.add(open);
        modalBox.classList.remove(close);
        document.addEventListener("click", closeDropdownOutside);
      }

      function closeDropdownOutside(event) {
        const isClickedInsideDropdown = modalBox.contains(event.target);
        const isClickedOnDropdownBtn = modalName.contains(event.target);

        if (!isClickedInsideDropdown && !isClickedOnDropdownBtn) {
          modalBox.classList.add(close);
          modalBox.classList.remove(open);
          document.removeEventListener("click", closeDropdownOutside);
        }
      }
    });
  }

  //select item from modal
  function selectItemFromModal(items, modalBox, slectText) {
    items.forEach((e) =>
      e.addEventListener("click", () => {
        modalBox.classList.remove("modalClose");
        modalBox.classList.add("modalOpen");
        slectText.innerHTML = e.textContent;
      })
    );
  }

  // Select Radio Item
  function selectRadioItem(suggestedItemsId, suggestedLanguagesClass) {
    const suggestedItems = document.querySelector(`#${suggestedItemsId}`);
    const suggestedLanguages = document.querySelectorAll(
      `.${suggestedLanguagesClass}`
    );

    suggestedItems &&
      suggestedLanguages.forEach((e) => {
        e.addEventListener("click", () => {
          const radioButton = e.querySelector(".radio-button");
          const innerCircle = e.querySelector(".radio-circle");

          if (!radioButton.classList.contains("acitveRadioOuter")) {
            const activeRadioOuter =
              suggestedItems.querySelector(".acitveRadioOuter");
            const activeRadioInner =
              suggestedItems.querySelector(".acitveRadioInner");

            activeRadioOuter.classList.remove("acitveRadioOuter");
            activeRadioOuter.classList.add("inactiveRadioOuter");
            activeRadioInner.classList.remove("acitveRadioInner");
            activeRadioInner.classList.add("inactiveRadioOuter");

            radioButton.classList.remove("inactiveRadioOuter");
            radioButton.classList.add("acitveRadioOuter");
            innerCircle.classList.remove("inactiveRadioInner");
            innerCircle.classList.add("acitveRadioInner");
          }
        });
      });
  }

  // Modal with different open and close button
  function modalDiffOpenClose(
    modalClass,
    modalOpenButtonClass,
    modalCloseButtonClass,
    closeModalClass,
    openModalClass
  ) {
    const modal = document.querySelector(`.${modalClass}`);
    const modalOpenButton = document.querySelector(`.${modalOpenButtonClass}`);
    const modalCloseButton = document.querySelector(
      `.${modalCloseButtonClass}`
    );

    modal &&
      modalOpenButton.addEventListener("click", () => {
        modal.classList.remove(closeModalClass);
        modal.classList.add(openModalClass);
      });

    modal &&
      modalCloseButton.addEventListener("click", () => {
        modal.classList.remove(openModalClass);
        modal.classList.add(closeModalClass);
      });
  }

  /*
===============================================================
=> Reusable Functions End
===============================================================
*/

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

  //check local storage
  const localStorageMode = localStorage.getItem("mode");
  const chooseModeButton = document.querySelector(".choose-mode");
  const selectWhiteCircle = chooseModeButton?.querySelector("div");

  function changeMode(mode) {
    if (mode === "dark") {
      document.querySelector("body").classList?.remove("white");
      document.querySelector("body").classList.add("dark");
    } else {
      document.querySelector("body").classList?.remove("dark");
      document.querySelector("body").classList.add("white");
    }
  }

  if (localStorageMode === "dark") {
    changeMode(localStorageMode);

    if (chooseModeButton) {
      chooseModeButton.classList?.remove("bg-n40");
      chooseModeButton.classList?.add("bg-p1");
      selectWhiteCircle.classList?.remove("left-0.5");
      selectWhiteCircle.classList?.add("left-[calc(100%-18px)]");
    }
  }

  // Light Mode Dark Mode

  chooseModeButton?.addEventListener("click", () => {
    if (localStorage.getItem("mode") === "dark") {
      localStorage.setItem("mode", "white");
      changeMode("white");
    } else {
      localStorage.setItem("mode", "dark");
      changeMode("dark");
    }
  });

  // custom swich
  const switchButton = document.querySelectorAll(".rounded-switch");

  switchButton?.forEach((e) => {
    e.addEventListener("click", () => {
      const circleButton = e.querySelector("div");
      if (circleButton.classList.contains("left-0.5")) {
        e.classList.remove("bg-n40");
        e.classList.add("bg-p1");

        circleButton.classList.remove("left-0.5");
        circleButton.classList.add("left-[calc(100%-18px)]");
      } else {
        e.classList.add("bg-n40");
        e.classList.remove("bg-p1");

        circleButton.classList.add("left-0.5");
        circleButton.classList.remove("left-[calc(100%-18px)]");
      }
    });
  });

  // FAQ Item Toggle
  let accordion = document.querySelectorAll(".faq-accordion");

  accordion.forEach((item, index) => {
    accordion[index].addEventListener("click", function () {
      let faqAnswer = this.nextElementSibling;
      let parent = accordion[index].parentElement;

      // Close all other accordions
      accordion.forEach((otherAccordion, otherIndex) => {
        if (otherIndex !== index) {
          let otherFaqAnswer = otherAccordion.nextElementSibling;
          otherFaqAnswer.style.height = null;
          otherAccordion.querySelector("i").classList.remove("text-p1");
          otherAccordion.parentElement.classList.remove("!border-p1");
        }
      });

      // Toggle open/close for the clicked accordion
      if (faqAnswer.style.height) {
        faqAnswer.style.height = null;
      } else {
        faqAnswer.style.height = faqAnswer.scrollHeight + "px";
      }

      accordion[index].parentElement.classList.add("!border-p1");

      // Toggle classes for the clicked accordion
      accordion[index].querySelector("i").classList.toggle("ph-caret-down");
      accordion[index].querySelector("i").classList.toggle("ph-caret-up");
      accordion[index].querySelector("i").classList.add("text-p1");
    });
  });

  // Country Select Modal
  const selectCountry = document.querySelector("#selectCountry");
  const selectCountryModal = document.querySelector(".selectCountryModal");

  const selectedCountry = document.querySelector(".selectedCountry");
  const sortByItem = selectCountryModal?.querySelectorAll(".sortbyItem");

  selectCountry &&
    modalToggle(selectCountry, selectCountryModal, "modalOpen", "modalClose");

  selectedCountry &&
    selectItemFromModal(sortByItem, selectCountryModal, selectedCountry);

  //Select City Modal
  const selectCity = document.querySelector("#selectCity");
  const selectCityModal = document.querySelector(".selectCityModal");

  const selectedCity = document.querySelector(".selectedCity");
  const sortByItem2 = selectCityModal?.querySelectorAll(".sortbyItem");

  selectCity &&
    modalToggle(selectCity, selectCityModal, "modalOpen", "modalClose");

  selectedCity &&
    selectItemFromModal(sortByItem2, selectCityModal, selectedCity);

  // Radio Button
  selectRadioItem("suggestedItems", "suggested");
  selectRadioItem("languageItems", "language");

  // logout modal
  modalDiffOpenClose(
    "logoutModal",
    "logoutModalButton",
    "logoutCloseButton",
    "hidden",
    "openLogoutModal"
  );

  // Sidebar Modal
  modalDiffOpenClose(
    "sidebarModal",
    "sidebarOpenButton",
    "sidebarCloseButton",
    "closeSidebarModal",
    "openSidebarModal"
  );
  modalDiffOpenClose(
    "sidebarBg",
    "sidebarOpenButton",
    "sidebarCloseButton",
    "hidden",
    "sidebarBgOpen"
  );
});
