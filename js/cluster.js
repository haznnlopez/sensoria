function filterCards(chip) {
  document
  .querySelectorAll(".stopic-chip")
  .forEach((c) => c.classList.remove("active"));
  chip.classList.add("active");
  const tag = chip.dataset.tag;
  const cards = document.querySelectorAll("#cards-grid > .col-md-6");
  let visibleCount = 0;
  cards.forEach((card) => {
      const cardTag = card.querySelector(".alc-chip")?.textContent.trim() || "";
      const isVisible = tag === "all" || cardTag === tag;
      card.style.display = isVisible ? "block" : "none";
      if (isVisible) {
        visibleCount++;
      }
  });
  const emptyState = document.getElementById("no-results");
  if (emptyState) {
    emptyState.style.display = visibleCount === 0 ? "block" : "none";
  }
}