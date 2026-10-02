
const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll(
    ".home, .content-section"
);

// Highlight the clicked navigation item
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");
    });
});

// Highlight the navigation item for the visible section
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentId = entry.target.id;

                navLinks.forEach(link => {
                    link.classList.toggle(
                        "active",
                        link.getAttribute("href") ===
                        `#${currentId}`
                    );
                });
            }
        });
    },
    {
        threshold: 0.3
    }
);

sections.forEach(section => {
    observer.observe(section);
});