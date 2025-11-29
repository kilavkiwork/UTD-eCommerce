import { initTrendingTabs } from "./modules/tabs";
import { highlightSaleBadge } from "./modules/sale-badge";

//
initTrendingTabs();
highlightSaleBadge();

document.addEventListener("click", (e) => {
  e.target.closest(".trending__item") && highlightSaleBadge();
});
