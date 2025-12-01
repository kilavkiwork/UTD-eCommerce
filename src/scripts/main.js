import { initTrendingTabs } from "./modules/tabs";
import { highlightSaleBadge } from "./modules/sale-badge";
import { modal } from "./modules/modal";
//
initTrendingTabs();
highlightSaleBadge();
modal();

document.addEventListener("click", (e) => {
  if (e.target.closest(".trending__item")) {
    highlightSaleBadge();
    modal();
  }
});
