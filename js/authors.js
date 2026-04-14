function filterArticles(btn, pillar) {
  document
  .querySelectorAll(".filter-chip")
  .forEach((c) => c.classList.remove("active"));
  btn.classList.add("active");
  let visible = 0;
  document
  .querySelectorAll("#articles-grid > [data-pillar]")
  .forEach((card) => {
      const show = pillar === "all" || card.dataset.pillar === pillar;
      card.style.display = show ? "" : "none";
      if (show) visible++;
    });
    document.getElementById("empty-state").style.display =
    visible === 0 ? "block" : "none";
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll(".fade-up").forEach((el) => io.observe(el));