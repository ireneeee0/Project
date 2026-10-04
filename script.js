/* =========================
   NAVIGATION
========================= */

const navLinks =
    document.querySelectorAll(
        ".sidebar nav a"
    );


const sections =
    document.querySelectorAll(
        ".main-content section[id]"
    );



/* =========================
   ACTIVE NAVIGATION
========================= */

function setActiveLink(sectionId) {

    navLinks.forEach(link => {

        const linkSection =
            link.getAttribute("href")
                .substring(1);

        link.classList.toggle(
            "active",
            linkSection === sectionId
        );

    });

}



/* =========================
   NAVIGATION CLICK
========================= */

navLinks.forEach(link => {

    link.addEventListener(
        "click",
        function () {

            const sectionId =
                this.getAttribute("href")
                    .substring(1);

            setActiveLink(sectionId);

        }
    );

});



/* =========================
   SCROLL DETECTION
========================= */

const observer =
    new IntersectionObserver(

        entries => {

            const visibleSections =
                entries
                    .filter(
                        entry =>
                            entry.isIntersecting
                    )
                    .sort(
                        (a, b) =>
                            b.intersectionRatio -
                            a.intersectionRatio
                    );


            if (
                visibleSections.length > 0
            ) {

                setActiveLink(
                    visibleSections[0]
                        .target
                        .id
                );

            }

        },

        {
            threshold: [
                0.2,
                0.4,
                0.6
            ],

            rootMargin:
                "-10% 0px -20% 0px"
        }

    );



/* =========================
   OBSERVE SECTIONS
========================= */

sections.forEach(section => {

    observer.observe(section);

});
