export function modal() {
  const modal = document.querySelector("#modal");
  const modalOverlay = modal.querySelector(".modal__overlay");
  const container = document.querySelector(".trending__panel--active") || document;
  const openBtn = container.querySelector("[data-open-button]");
  const closeBtns = modal.querySelectorAll("[data-close-button]");

  const setProductName = () => {
    const activePanel = document.querySelector(".trending__panel--active");
    const titleElement = activePanel.querySelector(".trending__card-title");

    const text = titleElement.textContent.trim();

    const part = text.split("-");
    const productName = part.length > 1 ? part[1].trim() : text;

    modal.querySelector("#modalTitle").textContent = productName;
  };

  const openModal = () => {
    setProductName();

    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.paddingRight = scrollBarWidth + "px";
    document.body.style.overflow = "hidden";

    modalOverlay.classList.add("active");
  };

  const closeModal = () => {
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";

    modalOverlay.classList.remove("active");
  };

  openBtn.addEventListener("click", openModal);
  closeBtns.forEach((btn) => btn.addEventListener("click", closeModal));

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}
