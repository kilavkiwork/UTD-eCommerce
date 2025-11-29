export function highlightSaleBadge(container = document) {
  const badges = container.querySelectorAll(".trending__card-badge");

  badges.forEach((badge) => {
    badge.classList.remove("trending__card-badge--sale");
  });

  const activePanel = container.querySelector(".trending__panel--active");
  if (!activePanel) return;
  console.log(activePanel);

  const saleBadge = activePanel.querySelector('[data-badge*="sale"]');
  if (saleBadge) {
    saleBadge.classList.add("trending__card-badge--sale");
  }
  console.log(saleBadge);
}
