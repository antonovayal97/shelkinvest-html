document.addEventListener("DOMContentLoaded", () => {
  let tabs = document.querySelectorAll(".p-catalog-detail-2__tab");
  let contents = document.querySelectorAll(".p-catalog-detail-2__tabs-content");

  if (tabs.length == 0) {
    return 0;
  }
  let current_content = contents[0];
  let current_tab = tabs[0];

  current_tab.classList.add("p-catalog-detail-2__tab--active");
  current_content.classList.add("p-catalog-detail-2__tabs-content--active");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      if (!tab.classList.contains("p-catalog-detail-2__tab--active")) {
        current_tab.classList.remove("p-catalog-detail-2__tab--active");
        current_tab = tabs[index];
        tab.classList.add("p-catalog-detail-2__tab--active");

        current_content.classList.remove(
          "p-catalog-detail-2__tabs-content--active"
        );
        current_content = contents[index];
        current_content.classList.add(
          "p-catalog-detail-2__tabs-content--active"
        );
      }
    });
  });
});
