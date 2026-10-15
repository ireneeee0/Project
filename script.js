// =========================
// Highlight the active nav link while scrolling
// =========================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

function setActiveLink() {
    const scrollPos = window.scrollY + window.innerHeight / 3;

    sections.forEach((section) => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollPos >= top && scrollPos < bottom) {
            navLinks.forEach((link) => {
                link.classList.toggle(
                    "active",
                    link.getAttribute("href") === "#" + section.id
                );
            });
        }
    });
}

window.addEventListener("scroll", setActiveLink);
window.addEventListener("load", setActiveLink);


// =========================
// Fade-in on scroll
// =========================

const revealItems = document.querySelectorAll(
    ".card, .info-box, .education-item, .section-title, .description"
);

revealItems.forEach((item) => item.classList.add("reveal"));

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );

    revealItems.forEach((item) => observer.observe(item));
} else {
    // Older browsers: just show everything
    revealItems.forEach((item) => item.classList.add("visible"));
}
