function filterCards(chip) {
  // 1. Update active state of filter chips
  document
    .querySelectorAll(".stopic-chip")
    .forEach((c) => c.classList.remove("active"));
  chip.classList.add("active");

  // 2. Identify the selected tag
  const tag = chip.dataset.tag;
  const cards = document.querySelectorAll("#cards-grid > .col-md-6");
  let visibleCount = 0;

  // 3. Toggle card visibility
  cards.forEach((card) => {
    const cardTag = card.querySelector(".alc-chip")?.textContent.trim() || "";
    const isVisible = tag === "all" || cardTag === tag;
    
    card.style.display = isVisible ? "block" : "none";

    if (isVisible) {
      visibleCount++;
    }
  });

  // 4. Handle "No Results" state
  const emptyState = document.getElementById("no-results");
  if (emptyState) {
    emptyState.style.display = visibleCount === 0 ? "block" : "none";
  }
}