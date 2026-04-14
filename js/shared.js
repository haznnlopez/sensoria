document.addEventListener("DOMContentLoaded", () => {
    document
    .querySelectorAll(
      "#navMenu .nav-link:not(.dropdown-toggle), #navMenu .dropdown-item",
    )
    .forEach((l) => {
        l.addEventListener("click", () => {
            const el = document.getElementById("navMenu");
            const c = bootstrap.Collapse.getInstance(el);
            if (c) c.hide();
          });
        });
        const io = new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting) e.target.classList.add("visible");
              });
            },
            { threshold: 0.1 },
          );
          document.querySelectorAll(".fade-up").forEach((el) => io.observe(el));
          const sidebar = document.getElementById("sidebar");
          if (sidebar) {
            const sbarItems = sidebar.querySelectorAll(".sbar-item[data-section]");
            const sectionIds = Array.from(sbarItems).map((i) => i.dataset.section);
            window.addEventListener("scroll", () => {
                let current = sectionIds[0];
                sectionIds.forEach((id) => {
                    const el = document.getElementById(id);
                    if (el && window.scrollY >= el.offsetTop - 130) current = id;
                  });
                  sbarItems.forEach((item) =>
                    item.classList.toggle("active", item.dataset.section === current),
                  );
                });
              }
            });