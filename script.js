
// Select all navigation links
const navLinks = document.querySelectorAll(".sidebar nav a");

// Select all sections with IDs
const sections = document.querySelectorAll(
    ".main-content section[id]"
);

// Update the active navigation link
function setActiveLink(sectionId) {
    navLinks.forEach(link => {
        const linkTarget = link.getAttribute("href");

        if (linkTarget === `#${sectionId}`) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

// Highlight the selected link when clicked
navLinks.forEach(link => {
    link.addEventListener("click", function () {
        const targetId = this.getAttribute("href").substring(1);
        setActiveLink(targetId);
    });
});

// Highlight the section currently visible on screen
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
        root: null,
        rootMargin: "-10% 0px -20% 0px",
        threshold: [0.1, 0.3, 0.5, 0.7]
    }
);

// Observe each section
sections.forEach(section => {
    observer.observe(section);
});
