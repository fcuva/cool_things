/**********************************************
 * ********************************************
 * TABS */

const tabsUl = document.querySelectorAll(".tabs__sidebar-ul");
const slider = document.querySelector(".tabs__sidebar-slider");
const tabContentItems = document.querySelectorAll(".tabs__content--item");

tabsUl.forEach((tabUl) => {
  const tabLiItems = tabUl.querySelectorAll(".tabs__sidebar-li");

  tabLiItems.forEach((tabLiItem, tabLiItemIdx) => {
    // Sets the ACTIVE tab
    if (tabLiItemIdx === 0) {
      slider.style.top = tabLiItem.offsetTop + "px";
      tabLiItem.classList.add("tabs__sidebar-li--active");
    }

    tabLiItem.addEventListener("click", function () {
      // Moves SLIDER to the clicked LI item
      slider.style.top = tabLiItem.offsetTop + "px";

      // Removes active class from all tabs
      tabLiItems.forEach((tabLi) => {
        tabLi.classList.remove("tabs__sidebar-li--active");
      });

      // Add  active class to clicked tab
      tabLiItem.classList.add("tabs__sidebar-li--active");

      // Show Content for clicked TAB
      tabContentItems.forEach((item, itemIdx) => {
        if (tabLiItemIdx === itemIdx) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});
/* TABS end *
 * *********************************************
 * ********************************************/

/**********************************************
 * ********************************************
 * COUNTER General Statistics - Dashboard */
const incrementCounter = () => {
  const counters = document.querySelectorAll(".counter-amount");
  const speed = 10;

  counters.forEach((counter) => {
    const updateValue = () => {
      const finalValue = +counter.getAttribute("data-number");
      const target = counter.querySelector(".num");
      const firstValue = +target.innerText;
      const inc = finalValue / speed;

      if (firstValue >= finalValue) {
        target.innerText = finalValue;
      } else {
        target.innerText = (firstValue + inc).toFixed(1);
        setTimeout(updateValue, 70);
      }
    };

    updateValue();
  });
};

// Call incrementCounter function from Backend insteadof calling it from setTimeout
setTimeout(incrementCounter, 400);

/* COUNTER General Statistics - Dashboard end *
 * *********************************************
 * ********************************************/
