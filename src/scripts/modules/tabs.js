export function initTrendingTabs(container = document) {
  const buttons = container.querySelectorAll(".trending__item");
  const panels = container.querySelectorAll(".trending__panel");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.tab;

      buttons.forEach((i) => i.classList.remove("trending__item--active"));
      btn.classList.add("trending__item--active");

      panels.forEach((p) => {
        p.classList.toggle("trending__panel--active", p.dataset.tab === id);
      });
    });
  });
}
