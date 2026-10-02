
const navLinks = document.querySelectorAll(".sidebar nav a");

const sections = document.querySelectorAll(
    ".main-content section[id]"
);

// Highlight the active navigation link
function setActiveLink(sectionId) {
    navLinks.forEach(link => {
        link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${sectionId}`
        );
    });
}

// Handle navigation clicks
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        const sectionId = link.getAttribute("href").slice(1);
        setActiveLink(sectionId);
    });
});

// Update the active link while scrolling
const observer = new IntersectionObserver(
    entries => {
        const visibleSections = entries
            .filter(entry => entry.isIntersecting)
            .sort(
                (a, b) =>
                    b.intersectionRatio - a.intersectionRatio
            );

        if (visibleSections.length > 0) {
            setActiveLink(visibleSections[0].target.id);
        }
    },
    {
        threshold: [0.2, 0.4, 0.6],
        rootMargin: "-10% 0px -20% 0px"
    }
);

sections.forEach(section => {
    observer.observe(section);
});
