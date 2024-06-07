document.addEventListener("DOMContentLoaded", () => {
  const galleryItems = Array.from(document.querySelectorAll(".gallery-item"));

  galleryItems.forEach(item => {
    const info = item.querySelector(".info");

    item.addEventListener("mouseenter", () => {
      info.classList.add("move-up");
    });

    item.addEventListener("mouseleave", () => {
      info.classList.remove("move-up");
    });
  });
});
