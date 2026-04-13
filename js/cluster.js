function filterCards(chip) {
  document
    .querySelectorAll(".stopic-chip")
    .forEach((c) => c.classList.remove("active"));
  chip.classList.add("active");
  const tag = chip.dataset.tag;
  const cards = document.querySelectorAll("#cards-grid > .col-md-6");
  let visible = 0;
  cards.forEach((card) => {
    const cardTag = card.querySelector(".alc-chip")?.textContent.trim() || "";
    const show = tag === "all" || cardTag === tag;
    ay = show ? "" : "none";
    if (show) visible++;
  });
  const empty = document.getElementById("no-results");
  if (empty) empty.style.display = visible === 0 ? "block" : "none";
}
